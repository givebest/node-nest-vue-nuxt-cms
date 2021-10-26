export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GiiBee CMS",
    htmlAttrs: {
      lang: "zh-cn"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "GiiBee CMS" },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#009bb1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "~/assets/css/base.less",
      lang: "less"
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/http"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    less: "./assets/css/*.less"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxt/http",
    "@nuxtjs/style-resources"
  ],

  http: {
    // debug: true,
    baseURL: "http://localhost:3000/" // Used as fallback if no runtime config is provided
  },

  server: {
    port: "3001"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes: [
      "products/detail/1",
      "products/categories/1",
      "products/categories/1/page/1",
      "products/page/1"
    ]
  }
};
