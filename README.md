# ts-autoapi


使用 openapi 或者 swagger 自动生成请求方法，和ts类型，并且不预设任何请求库，可连接到任意请求工具。

且最终生成后的代码超级轻量级，比常规请求封装请求函数代码体积能减少约一半。

## Installation
```bash
npm install ts-autoapi -D
```

## Usage
```bash
npx ts-autoapi gen --doc https://raw.githubusercontent.com/github/rest-api-description/main/descriptions-next/ghes-3.0/ghes-3.0.json --output test-apis --model test-apis/models

# your file structure will be like this
.
├── test-apis
│   ├── models
│   │   ├── api-a.d.ts
|   |   ├── api-b.d.ts
│   ├── api-a.ts
│   ├── api-b.ts
```

## Use apis
```ts
// you should setRequestHandler before use apis

// index.ts
import { useBridge } from 'ts-autoapi'
import { axios } from "<your request utils>" // or any request utils

/**
 * all apis will use this request handler
 */
useBridge().setRequestHandler((config) => {
  return axios.request({
    ...config, // other config in your request
    url: config.url,
    params: config.query,
    data: config.body,
    method: config.method as Method,
    headers: config.headers,
  })
})


// your business code
import { postLogin } from '../test-apis/api-a'

// send request
postLogin({
  body: {
    username: 'test',
    password: 'test',
  },
}).then(res => {
  console.log(res)
}
```

## Write your customize apis
```ts
// test-apis/my-api.ts
import { api } from 'ts-autoapi'

export const getMyApi = api`GET /my-api`

// you can also type it.
export const postMyApi = api<(path: string, query: any, body: any, config?: any) => any>`POST /my-api`
```

如果您觉得这个项目有用，请考虑给它一个 star。
