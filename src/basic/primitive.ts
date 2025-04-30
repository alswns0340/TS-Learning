export default function primitiveSample() {
  console.log('YJU')
  const name = 'JIT'
  console.log('primitive sample 1: 짜잔', typeof name, name)
  const age = 23
  console.log('primitive sample 2 :', typeof age, age)
  const isSingle = true
  console.log('primitive sample 3:', typeof isSingle, isSingle)
  const isOver20: boolean = age < 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
