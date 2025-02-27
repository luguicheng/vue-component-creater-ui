const path = require("path");

module.exports = {
  devServer: {
    open: true,
  },
  publicPath: "/ui/", //process.env.PUBLIC_PATH,
  css: { extract: false },
  chainWebpack: (config) => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  },

  publicPath: process.env.PUBLIC_PATH,
  productionSourceMap: false,

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },

  transpileDependencies: ["quasar"],
};
