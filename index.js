'use strict';

const {join} = require('path');

const npmCliDir = require('npm-cli-dir');

module.exports = function npmCliVersion(...args) {
  const argLen = args.length;

  if (argLen !== 0) {
    return Promise.reject(new RangeError(`Expected no arguments, but got ${argLen} argument${
      argLen === 1 ? '' : 's'
    }.`));
  }

  return npmCliDir().then(dirPath => {
    return require(join(dirPath, 'package.json')).version;
  });
};
