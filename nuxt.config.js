export default {
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
  // buildModules: [
  //   // Simple usage
  //   // '@nuxtjs/vuetify'

  //   // With options
  //   // ['@nuxtjs/vuetify', { /* module options */ }]
  // ],
  css: [
    'bulma',
    '@/assets/main.css'
  ],
  // dev: "",
  // env: "",
  // generate: "",
  // head: "",
  // loading: "",
  modules: [
    '@nuxtjs/bulma'
  ],
  // modulesDir: "",
  // plugins: "",
  // rootDir: "",
  // router: "",
  // server: "",
  // src: "",
  // dir: "",
  // transition: ""
}
