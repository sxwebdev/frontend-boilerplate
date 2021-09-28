/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const common = require("./webpack.common.js");
const { paths } = require(".")(__dirname);

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "static/js/[name].[contenthash:8].bundle.js",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
    }),

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      navigateFallback: paths.public + "/index.html",
      navigateFallbackDenylist: [
        new RegExp("^/_"),
        new RegExp("/[^/]+\\.[^/]+$"),
      ],
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          context: "public/",
          globOptions: {
            ignore: ["**/*.html"],
          },
        },
      ],
      options: {
        concurrency: 100,
      },
    }),

    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: paths.public,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...",
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    runtimeChunk: {
      name: "runtime",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512_000,
    maxAssetSize: 512_000,
  },
});
