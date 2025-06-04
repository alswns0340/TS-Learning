interface SStorage<T>{
  [key:string]:T;
}

export default class LocalStorage<T>{
  private storage : SStorage<T>={}

  set(key:string,value : T):void{
    if(this.storage[key] !== undefined){
      console.log('이미 존재하는 Key입니다. update를 이용해주세요');
      return
    }
    this.storage[key]=value
    console.log(`${key}에 값이 저장되었습니다`,value)
  }

  get(key:string):T|void{
    if(this.storage[key]===undefined){
      console.log(`${key}가 없습니다. 생성해주세요`)
      return
    }
    return this.storage[key]
  }

  update(key:string,value:T):void{
    if(this.storage[key]==undefined){
      console.log(`${key}가 없습니다. 새로 생성합니다`)
    }
    else console.log(`${key}업데이트 완료`)
    this.storage[key]=value
    return
  }

  remove(key:string):void{
    if(this.storage[key]==undefined){
      console.log(`${key}가 없습니다 다시 확인해주세요.`)
      return
    }
    delete this.storage[key]
    console.log('삭제 완료')
  }

  clear():void{
    this.storage={}
    console.log('storage 초기화 완료')
  }
}