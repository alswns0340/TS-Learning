export default function tupleSample() {
  // 일반적인 튜플 타입 정의
  const response: [number, string] = [200, 'OK'] // 요소의 구성 길이: 2, 정해진 타입 : number, string
  // response = [400, "Bad Request", "Email parameter is missing"] // 정의한 요소의 갯수와 틀림
  // response = ["400", "Bad Request"] // 정의해 놓은 타입의 종류가 틀림
  console.log('Array tuple sample 1:', response)

  // 가변 길이 튜플
  const girlfriends: [string, ...string[]] = ['Hanni', 'Daniel', 'Minji', 'Haerin']
  girlfriends.push('Hyein')
  console.log('Array tuple sample 2:',girlfriends)
}
