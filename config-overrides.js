const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  })
);
