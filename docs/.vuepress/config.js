module.exports = {
  base: '/vue-diagonal/',

  plugins: [
    '@vuepress/last-updated',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-161538924-1'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueDiagonal',
      description: 'VueDiagonal, a component for Vue.js'
    }
  },

  themeConfig: {
    repo: 'albertodeago/vue-diagonal',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/albertodeago/vue-diagonal/releases'
        }],
        sidebar: [
          '/getting-started.md',
          {
            title: "Examples",
            path: '/examples.md'
          },
        ]
      }
    }
  }
}
