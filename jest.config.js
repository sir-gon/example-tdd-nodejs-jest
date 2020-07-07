module.exports = {
  'verbose': true,
  'testEnvironment': 'node',
  transform: {
    '\\.m?jsx?$': 'jest-esm-transformer'
  },
  'globals': {
    'NODE_ENV': 'test'
  },
  'moduleFileExtensions': ['js', 'jsx'],
  'moduleDirectories': ['node_modules', 'lambda/'],
  'collectCoverage': true,
  'coverageReporters': ['text'],
  'coverageDirectory': 'coverage/',
  'transformIgnorePatterns': ['/app/.cache/', '/app/node_modules'],
  'testMatch': ['**/?(*.)+(spec|test).js?(x)'],
  'testPathIgnorePatterns': ['<rootDir>/.cache/', '/node_modules/']
};
