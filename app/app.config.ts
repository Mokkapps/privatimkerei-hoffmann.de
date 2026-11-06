export default defineAppConfig({
  ui: {
    colors: {
      neutral: 'stone',
      primary: 'honey',
    },
    prose: {
      // Honiggelb ist als Textfarbe auf hellem Grund zu kontrastarm
      a: {
        base: 'text-honey-ink border-b border-honey-ink/40 hover:border-honey-ink',
      },
    },
  },
})
