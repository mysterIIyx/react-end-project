const { merge } = require('webpack-merge');

// Wczytywanie konfiguracji z podkatalogu 'webpack'
const common = require('./webpack/common');
const development = require('./webpack/development');
const production = require('./webpack/production');

// Funkcja eksportująca, która wybiera konfigurację na podstawie trybu (--mode)
module.exports = (env, args) => {
  if (args.mode === 'development') {
    return merge(common, development);
  } else if (args.mode === 'production') {
    return merge(common, production);
  } else {
    // W rzadkich przypadkach, gdy tryb nie jest zdefiniowany
    return common; 
  }
};