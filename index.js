'use strict';

var join = require('path').join;

var npmCliDir = require('npm-cli-dir');

module.exports = function npmCliVersion() {
  return npmCliDir().then(function(dirPath) {
    return require(join(dirPath, './package.json')).version;
  });
};
