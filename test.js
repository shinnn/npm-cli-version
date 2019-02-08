'use strict';

const {resolve} = require('path');
const {Worker} = require('worker_threads');

const npmCliVersion = require('.');
const pathKey = require('path-key');
const test = require('tape');
const {valid} = require('semver');

test('npmCliVersion()', async t => {
	t.plan(2);

	t.equal(
		typeof valid(await npmCliVersion()),
		'string',
		'should get a semver-valid string.'
	);

	process.env[pathKey()] = resolve('/none/exists');
	delete process.env.npm_execpath;

	new Worker(`const {parentPort} = require('worker_threads');
(async () => {
	try {
		await require('.')();
	} catch ({code}) {
		parentPort.postMessage(code);
		return;
	}

	parentPort.postMessage('Unexpectedly succeeded.');
})();`, {eval: true}).on('message', message => t.equal(
		message,
		'ENOENT',
		'should fail when npm CLI is not installed.'
	)).on('error', t.fail);
});

test('Argument validation', async t => {
	try {
		await npmCliVersion('a');
		t.fail('Unexpectedly succeeded.');
	} catch ({message}) {
		t.equal(
			message,
			'Expected no arguments, but got 1 argument.',
			'should fail when it takes an argument.'
		);
	}

	try {
		await npmCliVersion('a', 'b');
		t.fail('Unexpectedly succeeded.');
	} catch ({message}) {
		t.equal(
			message,
			'Expected no arguments, but got 2 arguments.',
			'should fail when it takes arguments.'
		);
	}

	t.end();
});
