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
import OOP from './basic/OOP'
import interfaceFunc from './basic/interface'
import LocalStorage from './basic/LocalStorage/localstorage'
import { Player2 } from './basic/LocalStorage/player2'

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

// genericPoly()
// genericPlayer()

// OOP()

// interfaceFunc()

const P1= new Player2('kang','minjun')
const P2= new Player2('킴','종율센세')

const ls = new LocalStorage<string>()
const pls = new LocalStorage<Player2>()

ls.set('1','이제 뭐해야해...?')
ls.set('2','난 모르긴 해')
ls.get('1')
ls.get('2')
ls.update('2','진짜 모름')
ls.get('2')

pls.set('강',P1)
pls.set('김',P2)
pls.get('강')
pls.get('김')