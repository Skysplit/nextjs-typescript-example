module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.server.json',
      skipBabel: false,
    },
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transform: {
    '^.+\\.tsx?$': './node_modules/ts-jest/preprocessor.js',
  },
  testMatch: [
    '**/*.(test|spec).(ts|js|tsx|jsx)',
  ],
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: './src/__testSetup__/index.ts',
}
