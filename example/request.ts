import { useBridge } from 'autoapi'
import axios, { type Method } from 'axios'

const ins = axios.create({})

/**
 * // 并不影响设置你的请求拦截器
 * ins.interceptors.response.use(() => {
 *
 * })
 */

/**
 * 在调用生成的api之前，设置请求处理器
 * 所有 api 发出的请求都会通过这个处理器来请求到你设置的请求库
 */
useBridge().setRequestHandler((config) => {
  return ins.request({
    ...config, // other config in your request
    url: config.url,
    params: config.query,
    data: config.body,
    method: config.method as Method,
    headers: config.headers,
  })
})
