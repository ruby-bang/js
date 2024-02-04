function findMissingLetter(array) {
  abc = "abcdefghijklmnopqrstuvwxyz"
  a_Z = abc.concat(abc.toUpperCase());
  return [...a_Z].slice(a_Z.indexOf(array[0]), a_Z.indexOf(array[array.length - 1]) + 1).filter(val => !array.includes(val)).join('')
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']))
