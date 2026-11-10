# syntax=docker/dockerfile:1

# Match the repository's Node and packageManager versions.
ARG NODE_VERSION=26.13.0
FROM node:${NODE_VERSION}-bookworm-slim AS build
WORKDIR /app
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates python3 make g++ \
    && rm -rf /var/lib/apt/lists/*
RUN npm install --global pnpm@12.18.0
ENV HUSKY=0
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=nuxt-pnpm-26,target=/pnpm/store,sharing=locked \
    pnpm fetch --frozen-lockfile --store-dir /pnpm/store
COPY . .

# CI uses public test configuration; Coolify supplies same-name secret files.
ARG GITHUB_ACTIONS=false
ARG NUXT_PUBLIC_BASE_URL=http://localhost:80
ARG SOURCE_COMMIT
ENV NITRO_PRESET=node-server
RUN --mount=type=cache,id=nuxt-pnpm-26,target=/pnpm/store,sharing=locked \
    --mount=type=secret,id=NUXT_OG_IMAGE_SECRET \
    --mount=type=secret,id=NUXT_PUBLIC_GOOGLE_MAPS_API_KEY \
    --mount=type=secret,id=NUXT_PUBLIC_UMAMI_HOST \
    --mount=type=secret,id=NUXT_PUBLIC_UMAMI_ID \
    --mount=type=secret,id=SOURCE_COMMIT \
    for env_file in /run/secrets/*; do \
      [ -f "$env_file" ] || continue; \
      env_key=${env_file##*/}; \
      export "$env_key=$(cat "$env_file")"; \
    done \
    && pnpm install --offline --frozen-lockfile --store-dir /pnpm/store \
    && pnpm run build

FROM node:${NODE_VERSION}-bookworm-slim AS runtime
WORKDIR /app
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl libatomic1 \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /app/.data \
    && chown node:node /app /app/.data
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=80
COPY --from=build --chown=node:node /app/.output ./.output
USER node
EXPOSE 80
CMD ["node",".output/server/index.mjs"]
