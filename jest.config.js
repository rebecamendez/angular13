module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text-summary', 'clover'],
  reporters: ['default', 'jest-sonar']
};
