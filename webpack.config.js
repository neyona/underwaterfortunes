const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './frontend/static/frontend'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: "[id].css"
    }),
    new HtmlWebPackPlugin({
      template: "./frontend/templates/frontend/index.html",
      filename: "./index.html"
    }),
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    require('autoprefixer')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader',
            query: {
                limit: 600000, // 600kB
                name: 'img/[name].[hash:7].[ext]'
            },
        },
     ]
  },
  devServer: {
    historyApiFallback: true, // Necessary for react-router-dom to work
  },
};
