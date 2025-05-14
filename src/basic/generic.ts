export default function genericsSample() {
  // generics를 사용하지 않은 경우
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result += item
    }
    return result
  }
  console.log('Generics basic sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result += item
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000))
}
// type alias 사용한 경우
type Reduce = {
  (array: string[], initialValue: string): string
  (array: number[], initialValue: number): number
}

// const numberReduce1: Reduce 형태로 정의 가능하지만 boolean도 추가하려고 하면...

// generics를 사용한 경우
type GenericReduce<T> = {
  (array: T[], initialValue: T): T
}

// generic을 사용한 함수 정의
const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    result += item
  }
  return result
}
console.log('Generics basic sample 3:', genericStringReduce(['MANNER ','MAKES ', 'TYPESCRIPT ',], ''))

const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
  let result = initialValue
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    result += item
  }
  return result
}
console.log('Generics basic sample 4:', genericNumberReduce([-100, -200, -300], 1000))

