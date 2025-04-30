export default function notExistSample() {
  const nulltest = null
  console.log('notExistSample 1 : ', typeof nulltest, nulltest)

  if (nulltest) {
    console.log('notExistSample 2 :', typeof name, '나의 이름은', nulltest)
  } else {
    console.log('notExist Sample 3 :', '나의 이름은' + nulltest)
  }
  const undefinedtest = undefined
  console.log('notExist sample 4:', typeof undefinedtest, undefinedtest)
  if (undefinedtest) {
    console.log('notExist sample 5:', typeof undefinedtest, '나이는 ' + undefinedtest + '입니다.')
  } else {
    console.log('notExist sample 6:', 'undefined')
  }
}
