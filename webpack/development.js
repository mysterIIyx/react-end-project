// development.js

// const loader = require("sass-loader"); // <--- USUNIĘTE

module.exports = {
    devServer: {
      // W Webpack 5 zalecane jest 'static' zamiast 'contentBase'
      static: './public', 
      port: 3000,
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        // Reguła 1 (CSS Modules) - Ok
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]',
              },
            },
            'sass-loader', // Uproszczone: opcje dla dev są często zbędne
          ],
        },
        // Reguła 2 (Zwykłe SCSS) - NAPRAWIONA
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          // loader: ['style-loader', 'css-loader', 'sass-loader'], // <--- USUNIĘTE!
          use: ['style-loader', 'css-loader', 'sass-loader'], // <--- POZOSTAWIENIE TYLKO 'use'
        }
      ],
    },
};