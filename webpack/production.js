const { cleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path').resolve;


module.exports = {
  optimization: {
      minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

    plugins: [
        new cleanWebpackPlugin(),
    ],
    module: {
        rules: [{
          test: /\.module\.s(a|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader, 
            {
              loader:'css-loader'
            },
            {
              loader:'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ]
        }]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
        chunkFilename: 'style.[contenthash].css',
        publicPath: './',
      }),
    ],
};

// webpack.config.js