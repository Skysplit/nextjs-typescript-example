const path  = require('path');
const { get, has } = require('lodash');
const withTypescript = require('@zeit/next-typescript');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');

const setPathsResolution = (config, tsOptions) => {
  Object.assign(config.resolve, {
    plugins: [
      ...(config.resolve.plugins || []),
      new TSConfigPaths(tsOptions),
    ],
  });
}

module.exports = withTypescript({
  webpack: (config, options) => {
    setPathsResolution(config);
    return config;
  }
});
