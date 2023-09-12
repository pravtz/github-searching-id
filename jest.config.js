/* eslint-disable no-undef */
const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/@types/**/*',
    '!src/pages/**/*',
    '!src/constants/**/*',
    '!src/styles/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/styles.ts',
    '!src/**/types.ts'
  ],

  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],

};

module.exports = createJestConfig(customJestConfig);