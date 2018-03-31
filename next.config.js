const withTypescript = require('@zeit/next-typescript');
const TSConfigPaths = require('tsconfig-paths-webpack-plugin');

module.exports = withTypescript({
  webpack: (config, options) => {
    Object.assign(config.resolve, {
      plugins: [
        ...(config.resolve.plugins || []),
        new TSConfigPaths(),
      ],
    });

    return config;
  }
});
