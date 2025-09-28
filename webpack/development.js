const loader = require("sass-loader");

module.exports = {
    devServer:{
      contentBase: './public',
      port: 3000,
    },
    devtool:'inline-source-map',
    module: {
      rules: [
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
            {
              loader: 'sass-loader',
              options: {
                modules: true,
                localIdentName: '[local]',
                sourceMap: true,
              },
            },    
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: ['style-loader', 'css-loader', 'sass-loader'],
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
      ],
    },
};
