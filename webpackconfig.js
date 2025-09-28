const { merge } = require('webpack-merge');
const common = require('./common.js');
const commonConfig = require('./webpack/common');

module.exports = (env, { mode }) => {
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfig, properlyConfig);
  return mergedConfig;
}

// webpack.config.js