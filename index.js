'use strict';

const {join} = require('path');

const npmCliDir = require('npm-cli-dir');

module.exports = async function npmCliVersion(...args) {
	const argLen = args.length;

	if (argLen !== 0) {
		throw new RangeError(`Expected no arguments, but got ${argLen} argument${
			argLen === 1 ? '' : 's'
		}.`);
	}

	return require(join(await npmCliDir(), 'package.json')).version;
};
