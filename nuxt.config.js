import axios from 'axios'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' }, 
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },



  generate: {
    routes() {
      return axios.get('https://blog-nuxt-55ce5-default-rtdb.firebaseio.com/posts.json')
        .then(res => {
          // Get id
          const postsArray = [];
                  for(let key in res.data) { 
                      postsArray.unshift({ ...res.data[key], id: key })
                  }
            // Routes
            return postsArray.map(post => {
              return '/blog/' + post.id
          })
        })
    }
  }



}
