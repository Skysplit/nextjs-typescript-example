import path from 'path';
import { register } from 'tsconfig-paths';

interface PathsMap {
  [key: string]: string[];
}

const config = require(path.resolve(__dirname, '..', 'tsconfig.json'));

const replacePathToDist = (aliasPath: string) => aliasPath.replace(/\/src\//, '/dist/');

const mapSourceToDist = (paths: PathsMap): PathsMap => Object.entries(paths).reduce(
  (pathsMap, [alias, paths]) => ({
    ...pathsMap,
    [alias]: paths.map(replacePathToDist),
  }),
  {},
);

export default (env: string): void => {
  const configPaths = config.compilerOptions.paths;
  const isProduction = env === 'production';
  const registerPaths = isProduction ? mapSourceToDist(configPaths) : configPaths;

  register({
    baseUrl: config.compilerOptions.baseUrl,
    paths: registerPaths,
  });
};
