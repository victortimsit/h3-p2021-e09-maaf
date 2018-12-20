const pkg = require("./package");
import { resolve } from "path";
require("dotenv").config();

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      },
      { hid: "description", name: "description", content: pkg.description },
      { name: "msapplication-TileColor", content: "#2b5797" },
      { name: "theme-color", content: "#ffffff" }
    ],
    script: [
      // {
      //   src: SRC,
      //   defer: "", // delete key to false
      //   async: "", // delete key to false
      //   body: true // in body if true
      // }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#000" },

  /*
  ** Global CSS
  */
  css: ["~/assets/vendor/css/reset.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~/plugins/globals.js"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "nuxt-stylus-resources-loader",
      resolve(__dirname, "assets/stylus/main.styl")
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: process.env.API_URL
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  /*
  ** Server configuration
  */
  server: {
    port: 8016,
    host: "0.0.0.0"
  },

  /*
  ** Env
  */
  env: {
    // api_url: process.env.API_URL,
    pkg_name: process.env.NAME || pkg.name
  }
};
