module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: 'https://apis.google.com/js/platform.js' }
    ],
    title: 'testinggmail',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-signin-client_id', content: '941263478486-qmoqjkv0fojr065m76ini7ksimp1j9pt.apps.googleusercontent.com' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

