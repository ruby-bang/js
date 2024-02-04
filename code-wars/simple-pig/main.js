function pigIt(str) {

  return str.replaceAll(/(\s.)/g, '');

  //return str.split(' ').map(val => /^[a-zA-Z]+$/.test(val) ? val.replace(val, val.slice(1) + val.charAt(0) + 'ay') : val).join(' ')

  //return str.split(' ').map((item) => item.split('')).map(val => {
  //if (/^[a-zA-Z]+$/.test(val[0])) {
  //val.push(val[0] + "ay")
  //val.shift()
  //}

  //return val.join('')
  //}).join(' ')

  //arr.forEach((a, i) => {
  //arr[i].push(arr[i][0] + "ay")
  //arr[i].shift()
  //});
  //console.log(arr.join("\n"))
  //console.log(arr[0][1])
}

console.log(pigIt('Pig latin is cooli !'))
