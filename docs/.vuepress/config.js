module.exports = {
  base: '/vue-diagonal/',

  plugins: [
    '@vuepress/last-updated'
  ],

  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-43EK99KSQY'}],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-43EK99KSQY');
    `]
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
