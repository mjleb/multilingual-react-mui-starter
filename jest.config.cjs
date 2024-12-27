/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './tsconfig.app.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@mui/material/(.*)$': '<rootDir>/node_modules/@mui/material/$1',
    '^@mui/icons-material/(.*)$': '<rootDir>/node_modules/@mui/icons-material/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.ts'],
};
