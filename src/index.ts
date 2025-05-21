import typeAliasSample from './basic/alias'
import { any, primitiveSample, notExist, unknown, } from './basic'
import {
  logMessage,
  logMessage2,
  logMessage3,
  logMessage4,
  alwaysThrowError,
  sumProductsPrice,
  isUserSignedIn,
  isUserSignedIn2,
} from './basic/functionEx'
import objectSample from './basic/objectSample'
import arraySample from './basic/array'
import tupleSample from './basic/tuple'
import genericsSample from './basic/generic'
import advancedSample from './basic/advance'
import { genericPoly } from './basic/generic_poly'
import { genericPlayer } from './basic/genericPlayer'
// primitiveSample()
// notExist()
// any()
// unknown()
// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript!')
// logMessage3('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// isUserSignedIn('ABC', 'JiaSW')
// isUserSignedIn('DEF') // isUserSignedIn('123')
// isUserSignedIn2('ABC')

// const sum = sumProductsPrice(1000, 2000, 500, 3000, 250) //
// sumProductsPrice(1000, 2000, 500, 3000, 250, 333, 444, 555, 666)
// console.log('Function parameters sample 5: Total price:', sum)

// type Add2 = {
//   (a: number, b: number): number
//   (a: number, b: number, c: number): number // c는 필수
// }
// const add2: Add2 = (a, b, c?: number) => {
//   if (c) return a + b + c // c가 있으면 a + b + c 반환
//   return a + b // c가 없으면 a + b 반환
// }

// console.log(add2(1, 2))
// console.log(add2(1, 2, 3))

// alwaysThrowError('Hello TypeScript!')

// objectSample()
// typeAliasSample()
// arraySample()
// tupleSample()

// genericsSample()
// advancedSample()

genericPoly()
genericPlayer()
