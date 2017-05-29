import semver from 'semver';
import test from 'ava';

test('get a semver-valid string', async t => {
  t.is(typeof semver.valid(await require('.')()), 'string');
});
