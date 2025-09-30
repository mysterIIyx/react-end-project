// production.js - POPRAWIONY
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // POPRAWIONE NAZWNICTWO
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // NOWOCZESNY MINIMIZER
const TerserPlugin = require("terser-webpack-plugin");
const { resolve } = require('path');
const path = require('path').resolve;

module.exports = {
    optimization: {
        // Używamy nowoczesnych minimizerów
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})], 
    },

    module: {
        rules: [{
            test: /\.module\.s(a|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ]
        }]
        // Brak drugiej reguły, która powinna być w pliku wspólnym lub produkcyjnym
    },

    // JEDNA, POPRAWNA SEKCJA PLUGINS
    pplugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
      chunkFilename: 'style.[contenthash].css',
        }),
    ],
};