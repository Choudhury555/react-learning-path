import type { Config } from 'jest';

const config: Config = {
  // ts-jest preset that works with ESM + TS files (Vite projects are ESM)
  preset: 'ts-jest/presets/js-with-ts-esm',

  // Simulate a browser-like environment for component tests
  testEnvironment: 'jsdom',

  // Treat TS/TSX as ESM for proper import support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  // Use ts-jest to transform TS/TSX/JS/JSX for Jest
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', { useESM: true }],
  },

  // Mock stylesheet imports during tests
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Load RTL matchers (e.g., toBeInTheDocument) before each test
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
