/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const { paths, getClientEnviroments, moduleExtensions } =
  require(".")(__dirname);

module.exports = {
  entry: paths.src + "/index",
  target: "web",

  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
    assetModuleFilename: "static/media/[hash][ext][query]",
  },

  resolve: {
    extensions: moduleExtensions.map((extension) => `.${extension}`),
    plugins: [new TsconfigPathsPlugin()],
  },

  module: {
    rules: [
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, type: "asset/resource" },

      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: "asset/resource" },

      { test: /\.json$/, type: "asset/resource" },

      {
        test: /\.(?:tsx|ts)?$/,
        loader: "ts-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new webpack.EnvironmentPlugin(getClientEnviroments()),

    new ESLintPlugin({
      extensions: moduleExtensions,
      exclude: ["node_modules"],
      files: [
        "./src/**/*.ts",
        "./src/**/*.tsx",
        "./src/**/*.js",
        "./src/**/*.jsx",
      ],
      formatter: "table",
      //failOnError: false,
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
