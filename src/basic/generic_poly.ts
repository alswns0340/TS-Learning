export function genericPoly(){

  // type SuperPrint={
  //   (arr:number[]):void
  // }

  type SuperPrint = {
    <T>(arr:T[]):void
  }

  const superPrint1:SuperPrint = (arr)=>{
    arr.forEach((i)=>console.log(i))
  }
  superPrint1([1, 2, 3, 4]);
  superPrint1([true, false, true]);
  superPrint1(['1', '2', '3']);
  superPrint1([1, 2, false, true]);
  superPrint1([1, 2, false, true, 'hello']);
  
  type SuperPrint2={
    (arr:number[]):void;
    (arr:boolean[]):void
  }
  const superPrint1_1:SuperPrint2 = (arr)=>{
    arr.forEach((i)=>console.log(i))
  }
  superPrint1_1([1,2,3,4])
  superPrint1_1([true,false,true])

  

  const superPrint2: SuperPrint = (arr) => arr[0];
  
  superPrint2([1, 2, 3, 4]);
  superPrint2([true, false, true]);
  superPrint2(['1', '2', '3']);
  superPrint2([1, 2, false, true]);
  superPrint2([1, 2, false, true, 'hello']);

  type SuperReturn = {<T>(arr:T[]):T}
  // type SuperReturn = {(arr:any[]):any}

  const superPrint3:SuperPrint=(arr)=>{
    arr.forEach((i)=>console.log(i))
  }
  const superReturn:SuperReturn=(arr)=>arr[0]

  superPrint3([1,2,false,true,"hello"])

  console.log('superReturn:',superReturn([1,2,3,4]));
  // console.log(superReturn([1,2,false,true,"hello"]).toUpperCase());

  type SuperReturnG = {<T,M>(arr:T[],B:M):T}
  const superReturnG :SuperReturnG=(arr)=>arr[0]
  console.log(superReturnG([1,2,3,4],"x"))
  superReturnG([true,false],1)
  superReturnG(["1","2"],true)
  superReturnG([1,2,false,true,"hello"],[])

  
  type Print = <T,M>(arr:T[],b:M)=>T
  const arrFunc:Print = (arr)=>arr[0]
  function arrFunc3<V,N>(arr:V[],b:N){
    return arr[0]
  }
  const arrFunc2 = <V,N>(arr:V[],b:N)=>arr[0];

  const a=arrFunc2([1,2,3,4],"one")
  const b = arrFunc3(["1","2"],1)
  const c = arrFunc([false,true,false],true)
  const d = arrFunc([1,2,"3",false],{})
  console.log(a,b,c,d)
}

