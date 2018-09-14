const { I18N, baseURL, AUTH } = require("./plugins/config");
const webpack = require("webpack");
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  modules: [
    ["@nuxtjs/auth", AUTH],
    ["@nuxtjs/axios", baseURL],
    ["nuxt-i18n", I18N]
  ],
  css: [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "./node_modules/element-ui/lib/theme-chalk/index.css",
    "~/assets/sass/now-ui-kit.scss",
    "~/assets/sass/demo.scss",
    "~/assets/sass/custom.scss"
  ],
  plugins: [
    { src: "~plugins/nossr.js", ssr: false },
    "~plugins/globalDirectives.js",
    "~plugins/globalMixins.js",
    "~plugins/globalComponents.js",
    { src: "~/plugins/now-ui-kit.js" },
    { src: "~plugins/notify.js", ssr: false }
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
