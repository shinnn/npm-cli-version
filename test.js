import semver from 'semver';
import npmCliVersion from '.';
import test from 'ava';

test('get a semver-valid string', async t => {
	t.is(typeof semver.valid(await npmCliVersion()), 'string');
});

test('reject if it takes an argument', async t => {
	const {message} = await t.throws(npmCliVersion(1));
	t.is(message, 'Expected no arguments, but got 1 argument.');
});

test('reject if it takes arguments', async t => {
	const {message} = await t.throws(npmCliVersion(1, 2));
	t.is(message, 'Expected no arguments, but got 2 arguments.');
});
