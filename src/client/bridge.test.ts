import { expect, it, describe, vi } from 'vitest'

import { useBridge, BridgeImpl, buildUrl, api } from './bridge'
import { DevNetError } from './errors'

describe('Bridge tests', () => {
  it('Should create singleton client', () => {
    expect(useBridge()).toEqual(useBridge())
  })

  it('Should throw error when requestHandler unset', () => {
    expect(() => new BridgeImpl().request({})).toThrowError(DevNetError)
  })

  it('Client should work', async () => {
    const client = new BridgeImpl()
    client.setRequestHandler(() => Promise.resolve('Response'))
    expect(await client.request({})).toEqual('Response')
  })
})

describe('buildUrl tests', () => {
  it('Should throw error when args not match', () => {
    expect(() => buildUrl('/a/{b}/{c}', ['1'])).toThrowError(DevNetError)
    expect(() => buildUrl('/a/{b}', ['1', '2'])).toThrowError(DevNetError)
  })

  it('Should throw error when args includes undefined', () => {
    expect(buildUrl('/a/{b}', ['hello'])).toBeTruthy()
    expect(() => buildUrl('/a/{b}', [undefined])).toThrowError(DevNetError)
  })

  it('Should build truthy url', () => {
    expect(buildUrl('/a/{b}', 'hello')).toBe('/a/hello')
    expect(buildUrl('/a/{b}', ['hello'])).toBe('/a/hello')
    expect(buildUrl('/a/{b}/{c}', ['hello', 1])).toBe('/a/hello/1')
  })
})

describe('api tests', () => {
  const fn = vi.fn()
  useBridge().setRequestHandler(fn)

  it('Should conversion parameters', () => {
    const getUser = api`GET /user/{id}`
    getUser(10)
    expect(fn).toHaveBeenLastCalledWith({ url: '/user/10', method: 'GET' })

    getUser(20, { username: 'test' })
    expect(fn).toHaveBeenLastCalledWith({
      url: '/user/20',
      method: 'GET',
      query: { username: 'test' },
    })

    // 如果第二个参数被检测到类似配置项，但是需要将第二个参数做为请求参数传递，一定要传第三个参数
    // 才能正确将第二个参数识别为请求参数
    getUser(20, { query: 'test' }, {})
    expect(fn).toHaveBeenLastCalledWith({
      url: '/user/20',
      method: 'GET',
      query: { query: 'test' },
    })
  })

  it('Should has top level in config', () => {
    const getUser = api`GET /user/{id}`
    getUser(
      10,
      { a: 20 },
      {
        url: '/user/30',
        query: {
          a: 10,
        },
        body: {
          b: 20,
        },
      }
    )

    expect(fn).toHaveBeenLastCalledWith({
      url: '/user/30',
      method: 'GET',
      query: {
        a: 10,
      },
      body: {
        b: 20,
      },
    })
  })

  it('Should has top level in config', () => {
    const getUser = api`POST /user`
    getUser({ a: 20 })

    expect(fn).toHaveBeenLastCalledWith({
      url: '/user',
      method: 'POST',
      body: {
        a: 20,
      },
    })
  })

  it('Should has top level in config', () => {
    const getUser = api`GET /user`
    getUser({ a: 20 })

    expect(fn).toHaveBeenLastCalledWith({
      url: '/user',
      method: 'GET',
      query: {
        a: 20,
      },
    })
  })

  it('Should has top level in config', () => {
    const getUser = api`POST /user/{id}`
    getUser(
      10,
      { a: 20 },
      {
        url: '/user/30',
        query: {
          a: 10,
        },
        body: {
          b: 20,
        },
      }
    )

    expect(fn).toHaveBeenLastCalledWith({
      url: '/user/30',
      method: 'POST',
      query: {
        a: 10,
      },
      body: {
        b: 20,
      },
    })
  })
})
