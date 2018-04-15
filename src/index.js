require('dotenv/config');
require('babel-register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es'],
});
require('ts-node/register');
require('tsconfig-paths/register');
require('./server');
