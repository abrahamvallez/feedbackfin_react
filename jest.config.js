module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
