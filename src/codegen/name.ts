// 把第一个匹配的文字大写，然后拼上
export function upperWithPrefix(prefix: string) {
  return (_: string, $1: string, $2: string) => {
    return prefix + $1.toUpperCase() + $2
  }
}

const IN_PATH_PARAM_PREFIX = 'By'

const MUL_PATH_PARAM_PREFIX = 'And'

/**
 * 把接口路径给驼峰化
 */
export function makeCamelCasePath(path: string): string {
  return (
    path
      // /pet/dog/list/ => PetDogList$  为了区分 / 结尾和非斜杆结尾
      .replace(/\/$/, '$')
      // pet/dog/list => PetDogList  接口名驼峰化
      .replace(/(^\w)|[-_/](\w)/g, (_, $1, $2) => ($1 || $2).toUpperCase())
      // /pet/dog/{dogId} => PetDogByDogId  url中的参数使用 By 来连接
      .replace(/\/{(\w)(\w+)}/, upperWithPrefix(IN_PATH_PARAM_PREFIX))
      // /pet/{animalType}/{animalId} => PetByAnimalTypeAndAnimalId 多个参数用And连接
      .replace(/\/{(\w)(\w+)}/g, upperWithPrefix(MUL_PATH_PARAM_PREFIX))
  )
}

/**
 * 首字母大写
 */
export function upperFirst(text: string) {
  return text.replace(/^\w/, c => c.toUpperCase())
}

// 匹配文字后面的下标，或者匹配文字末尾
const NAME_END_OR_$INDEX_RE = /(\$)(\d+)$|$/

// TODO 使用 方法名 + 类型来做唯一名字
/**
 * 生成一个唯一的名字，如果重复，就在后面加 $1 $2 $3 这种递增的后缀
 * openapi没有可靠的唯一ID（不会校验operationId是否唯一），目前暂时通过这种方式来简易实现
 */
export function uniqueNameFactory() {
  // 通过闭包来保存取过的所有名字
  const cachedName: Set<string> = new Set()
  const getUniqueName = (name: string): string => {
    if (cachedName.has(name)) {
      const newName = name.replace(NAME_END_OR_$INDEX_RE, (_, $1, $2) =>
        $2 ? $1 + (+$2 + 1) : '$1'
      )
      return getUniqueName(newName)
    }
    cachedName.add(name)
    return name
  }
  return getUniqueName
}

/**
 * 创建一个唯一方法命名器，返回一个给接口取名
 */
export function apiNameCreator() {
  const createUniqueName = uniqueNameFactory()

  return (method: string, path: string) => {
    return createUniqueName(method + makeCamelCasePath(path))
  }
}

/**
 * 通过用方法名 + 路径来创建一个唯一的名字
 */
export function createApiName(method: string, path: string) {
  return method + makeCamelCasePath(path)
}
