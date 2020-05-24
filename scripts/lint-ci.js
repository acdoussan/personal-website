const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;
const assert = require('assert');

const cli = new CLIEngine();

const result = cli.executeOnFiles(['.']);

const defaultFormatter = cli.getFormatter();
const junitFormatter = cli.getFormatter('junit');

console.log(defaultFormatter(result.results));

fs.writeFileSync('lint-results.xml', junitFormatter(result.results));

assert.ok(result.errorCount === 0, `Expected 0 lint errors, found ${result.errorCount}`);
