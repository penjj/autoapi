import { expect, test } from 'vitest'

import {
  getGroup,
  getUnGroupedPath,
  normalizeUrl,
  resolveModelName,
} from './parse'
import { uniqueNameFactory } from './name'

test('get group test', () => {
  expect(getGroup('/abc/bbb/ccc')).toEqual('abc')
  expect(getGroup('abc/bbb/ccc')).toEqual('abc')
  expect(getGroup('ab-c/bbb/ccc')).toEqual('ab-c')
})

test('normalizeUrl test', () => {
  expect(normalizeUrl('/merchant/banner/delete')).toEqual(
    '/merchant/banner/delete'
  )
  expect(normalizeUrl('/merchant/{groupId}/{bannerId}')).toEqual(
    '/merchant/${groupId}/${bannerId}'
  )
})

test('resolveModelName test', () => {
  const createName = uniqueNameFactory()
  expect(resolveModelName('#/merchant/banner/delete', createName)).toEqual(
    'delete'
  )
  expect(resolveModelName('#/merchant/banner/测试', createName)).toEqual(
    'UnnamedModel'
  )
  expect(resolveModelName('#/merchant/banner/<delete>', createName)).toEqual(
    '_delete_'
  )
})

test('getUnGroupedPath test', () => {
  expect(getUnGroupedPath('/abc/d')).toEqual('/d')
  expect(getUnGroupedPath('abc/d')).toEqual('/d')
  expect(getUnGroupedPath('/a-abc/d')).toEqual('/d')
  expect(getUnGroupedPath('b-abc/d/c')).toEqual('/d/c')
})
