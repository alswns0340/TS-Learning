export default function advancedSample() {
  // map 함수의 시그니처
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]
  
  type Foreach<T>=(array:T[],fn:(item:T)=>void)=>void
  const forEachEx:Foreach<number> = (array,fn)=>{
    for (let i = 0; i < array.length; i++) {
      console.log(fn(array[i]))
    }
  }

  const number = forEachEx([1,5,3,2,6],(item)=>item**2)

  console.log('foreachTest',number)

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '001'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('Generics advanced sample 2:', strings)
}
