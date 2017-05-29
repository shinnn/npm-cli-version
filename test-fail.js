import {resolve} from 'path';

import pathKey from 'path-key';
import test from 'ava';

process.env[pathKey()] = resolve('/none/exists');

test('fail when `npm` is not installed', async t => {
  const error = await t.throws(require('.')());
  t.is(error.code, 'ENOENT');
});