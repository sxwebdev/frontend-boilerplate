/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const { paths } = require(".")(__dirname);

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    historyApiFallback: true,
    static: {
      directory: paths.public,
    },
    open: true,
    compress: true,
    hot: true,
    port: process.env.FRONT_PORT_MAIN,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
    }),
  ],
});
