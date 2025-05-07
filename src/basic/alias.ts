export default function typeAliasSample() { 
  // type alias 
  type Country = { 
      capital: string 
      language: string 
      name: string 
    } 
  const korea: Country = { 
      capital: 'Seoul', 
      language: 'Korean', 
      name: 'Republic of Korea', 
    } 
  console.log('Object alias sample 1:', korea) 
  const america: Country = { 
    capital: 'Washington, D.C.', 
    language: 'English', 
    name: 'United States of America', 
  }  
  console.log('Object alias sample 2:', america)            

  // 합집합, 合併型(union), 교집합, 交差型(intersection) 
type Knight = { 
  hp: number 
  sp: number 
  weapon: string 
  swordSkill: string 
}
type Wizard = { 
  hp: number 
  mp: number 
  weapon: string 
  magicSkill: string 
}
type Adventurer = Knight | Wizard 
type Paladin = Knight & Wizard // 교집함 형: Knight와 Wizard가 가진 모든 데이터를 가진 타입, 용사 
//adventurer1, Knight쪽에 가까운 모험가 
const adventurer1: Adventurer = { 
    hp: 100, 
    sp: 30, 
    weapon: '목검', 
    swordSkill: '3연타베기', 
  } 
console.log('Object alias sample 3:', adventurer1) 
// adventurer2, Wizard쪽에 가까운 모험가 
const adventurer2: Adventurer = { 
    hp: 100, 
    mp: 30, 
    weapon: '나무지파이', 
    magicSkill: '파이어 볼', 
  } 
console.log('Object alias sample 4:', adventurer2) 
// Knight와 Wizard 양쪽 모두의 타입을 가지는 paladin 
const paladin: Paladin = { 
    hp: 300, 
    sp: 100, 
    mp: 100, 
    weapon: '좋은 검', 
    swordSkill: '권기현 진심펀치', 
    magicSkill: '파이어 볼', 
  }

console.log('Object alias sample 5:', paladin)       
} 