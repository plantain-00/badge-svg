import test from 'ava'

import generateBadgeSvg from '../src'

test('basic', (t) => {
  t.snapshot(generateBadgeSvg('test', '1.2.3'))
})
