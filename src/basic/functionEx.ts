export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message)
}
// 함수 선언식
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message)
}
// 함수식
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message)
}
// arrow function 생략기법
export const logMessage4 = (message: string): void => console.log('Function basic sample 4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function 2')
    return false
  }
}

export const isUserSignedIn2 = (userId: string, username = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function 3', username)
    return true
  } else {
    console.log('function 4 : not signed in')
    return false
  }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}

type LogMessage = (message: string) => void
export const logMessage5: LogMessage = (message) => {
  console.log('Function basic sample 5:', message)
}
type FullLogMessage = {
  (message: string): void
}
export const logMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}
