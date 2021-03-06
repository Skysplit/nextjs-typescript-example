const path  = require('path');
const get = require('lodash/get');
const has = require('lodash/has');
const withTypescript = require('@zeit/next-typescript');
const withSourceMaps = require('@zeit/next-source-maps');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');

const setPathsResolution = (config, tsOptions) => {
  Object.assign(config.resolve, {
    plugins: [
      ...(config.resolve.plugins || []),
      new TSConfigPaths(tsOptions),
    ],
  });
}

const nextTypescript = withTypescript({
  webpack: (config, options) => {
    setPathsResolution(config);
    return config;
  }
});

const nextSourceMaps = withSourceMaps(nextTypescript);

const nextConfig = {
  distDir: '../../dist/client',
  useFileSystemPublicRoutes: false
};

module.exports = Object.assign(
  {},
  nextSourceMaps,
  nextConfig,
);
