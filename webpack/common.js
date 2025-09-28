const path = require('path').resolve;
const htmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: {
            index: path(__dirname, '..',  './src/', 'index.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path(__dirname, '..', 'build'),
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    resolve:{
        extensions:['.jsx', '.js']
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use:
                    {
                      loader: 'babel-loader',
                    },
            }
        ],
    },
    plugins: [
      new htmlWebpackPlugin({
          title: 'webpack',
            template: path(__dirname,'..','public', 'index.html')
            }),
    ],


};

// webpack.config.js