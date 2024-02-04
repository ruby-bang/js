function solution(string) {
  return string.split('').map(val => val.toUpperCase())
  //return string.split('').map(val => val == val.toUpperCase() ? ' ' + val : val).join('')
}

console.log(solution("camelCasing"))
