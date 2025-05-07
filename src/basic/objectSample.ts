export default function objectSample() { 
  const a: object = { 
      name: 'JapanIT', 
      age: 28 
    } 
  // a.name  // 에러 
  console.log("Object object sample 1:", a) 
  let country: { 
      language: string 
      name: string 
    } = { 
      language: 'Japanese', 
      name: 'Japan', 
    } 
  console.log('Object object sample 2:', country) 
  // 같은 구조의 객체 대입 가능 
    country = { 
      language: 'English', 
      name: 'United States of America', 
    } 
    console.log('Object object sample 3:', country) 
    const jit: { 
      age: number 
      lastName: string 
      readonly firstName: string 
      gender?: string 
    } = { 
      age: 28, 
      lastName: 'Kim', 
      firstName: 'YoungJin', 
  } 
  jit.lastName = 'Lee'  // 다시쓰기 가능 
// jit.firstName = 'JR'   // 다시쓰기 불가능 
  jit.gender = 'male'  // 객체 생성후 추가해도 OK 
  console.log('Object object sample 4:', jit) 
  const capitals: {  
    [countryName: string]: string  
    } =  
    { 
      Japan: 'Tokyo', Korea: 'Seoul', 
    }; 
  capitals.China = 'Beijing' 
  capitals.Canada = 'Ottawa' 
  console.log('Object object sample 5:', capitals)
  
}