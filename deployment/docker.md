# Coolify Docker deployment

The root Dockerfile builds with Node 26.13.0 and pnpm 12.18.0. The runtime contains the standalone Nuxt output at `.output`, its traced dependencies, and HTTP health-check tools. It runs as `node` on port 80; `/app/.data` is writable for content and image caches. Keep the Dockerfile versions aligned with the repository toolchain.

In Coolify, use the Dockerfile build pack, `/Dockerfile`, target `runtime`, and port `80`. Enable BuildKit secrets (`use_build_secrets=true`), manage build arguments in the Dockerfile (`inject_build_args_to_dockerfile=false`), and include the source commit during the build. Preserve the existing runtime variables, domains, storage and health checks. Use the Dockerfile's command.

Build variables are mounted as same-name files for the install and build step. Add a matching secret mount when introducing a new build-time variable. Credentials are not declared as Docker ARG or ENV. The `GITHUB_ACTIONS` and public base URL arguments support credential-free CI builds; production uses the existing Coolify variables.

The Docker image workflow builds the real runtime and checks public routes, JavaScript assets, native IPX images when present, writable data storage and the runtime user. Existing application checks still apply. External integrations require separate verification after deployment.

For rollback, retain the current production image and record the previous build settings before switching. If the new image fails, restore that image and the previous Railpack/Nixpacks settings. Runtime image retention and builder-cache cleanup remain separate policies.
