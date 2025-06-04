interface User2{
  firstName : string
  lastName : string
  sayHi(name:string):string
  fullName():string
}

export class Player2 implements User2{
  constructor(public firstName: string, public lastName: string) {} 
  sayHi(name:string){
    return `hi ${name}. My name is ${this.fullName()}`
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}