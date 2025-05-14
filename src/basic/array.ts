export default function arraySample() {
  // 간단 배열 형 정의
  const colors: string[] = ['red', 'blue']
  colors.push('yellow') // OK
  // colors.push(123) // NG
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8) // OK
  // even.push("10") // NG
  console.log('Array array sample 2:', even)

  // union으로 배열 형 정의
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF') // OK
  ids.push(456) // OK
  // ids.push(true) // NG

  console.log('Array array sample 3:', ids)

  // 타입 추론되는 배열 타입 정의
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]로 추론
    _someArray.push('ABC') // (string | number)[]로 추론
    return _someArray
  }

  const someArray = generateSomeArray()
  // someArray.push(true) // generateSomeArray()는 (string | number)[] 타입의 배열을 반환하는 것으로 추론, boolean은 추가 불가
  console.log('Array array sample 4:', someArray)

  // 읽기 전용 배열
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch") // 추가 불가
  // commands[2] = "git pull" // 할당 불가
  console.log('Array array sample 5:', commands)

  // 읽기 전용 배열
  const immutableNumbers: ReadonlyArray<number> = [1, 2, 3]
  // immutableNumbers.push(4) // NG
  console.log('Array array sample 6:', immutableNumbers)

  const immutableNames: Readonly<string[]> = ['Kim', 'Lee', 'Park']
  // immutableNames.push("Choi") // NG
}
