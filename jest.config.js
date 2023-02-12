/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.e2e-spec.ts"],
  transformIgnorePatterns: ["<rootDir>/node_modules/", "build"],
  verbose: true,
  forceExit: true,
  testSequencer: "./jest.sequencer.js",
};
