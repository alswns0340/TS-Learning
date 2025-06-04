import { Player2 } from "./LocalStorage/player2"

interface Bread { 
  calories: number 
}
interface Bread { 
  type: string 
} 
const francePan: Bread = { 
  calories:350, 
  type:'hard' 
} 
// # alias 사용하여 merge
 // type alias 
type MaboDofu = { 
  calories: number 
  spicyLevel: number 
} 
type Rice = { 
  // calories: number 
  gram: number 
} 
type MaboDon = MaboDofu & Rice // 교집합형(intersection ) 
// MaboDofu, Rice 양쪽 타입을 모두 가진 변수를 정의 
const maboDon: MaboDon = { 
  calories: 500,   
// 교집합부분은 머지 
  gram: 100, 
  spicyLevel: 5, 
} 

interface Book { 
  page: number 
  title: string 
} 
interface Magazine extends Book {  
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly' 
} 
const jump: Magazine = { 
  cycle: 'weekly', 
  page: 300, 
  title: '주간소년 점프', 
}   
// interface는 type alias도 extends 가능
type BookType = { 
  page: number 
  title: string 
} 
interface HandBook extends BookType { 
  theme: string 
} 
const cotrip: HandBook = { 
  page: 120, 
  theme: '여행', 
  title: 'CO Trip!', 
}

class Comic implements Book{
  page:number
  title:string
  constructor(page:number, title:string,private publishYear:string|number){
    this.page=page
    this.title=title
  }
  getPublishYear(){
    return this.title + '이 판매된 것은 '+this.publishYear+'년 입니다.'
  }
}

abstract class User { 
  constructor(protected firstName: string, protected lastName: string) {} 
  abstract sayHi(name: string): string; // 추상 메서드 (구현 X, 시그니처만) 
  abstract fullName(): string; 
}

class Player extends User{
  sayHi(name:string){
    return `hi ${name}. My name is ${this.fullName()}`
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

export default function interfaceFunc(){
  console.log('interface 머지 예제 :',francePan)
  console.log('type alias 머지 예제 :',maboDon)
  console.log('interface extend 예제 :',jump)
  console.log('type alias extend 예제 :',cotrip)
  const kimetsunoyaiba = new Comic(200,'귀칼',2024)
  console.log(kimetsunoyaiba.getPublishYear());
  const Me = new Player('kang','minjun')
  console.log(Me.sayHi('나'))
  const Me2 = new Player2('kang','minjun')
  console.log('interface 예제',Me2.sayHi('교수님'))
}