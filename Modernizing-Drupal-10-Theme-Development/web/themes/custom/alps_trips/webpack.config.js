const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    main: "./js/main.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
}
