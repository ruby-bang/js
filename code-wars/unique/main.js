var uniqueInOrder = function(iterable) {

  //return ["nama", "asld"].reduce((p, c) => p == c ? '' : c, 0)
  var word;
  try {
    word = iterable.split('');
  } catch (_) {
    word = iterable
  }





  //return word.map((val, i) => val != word[i - 1] ? val : '').join('').split('').map(e => {
  //return isNaN(e) ? e : parseInt(e)
  //})

  //for ([index, val] of word.entries()) {
  //if (val != word[index - 1]) {
  //console.log(word[index])
  //}
  //}
  //return word.reduce((p, c, i, arr) => {
  //return p == c ? c : arr[i] = c
  //}, '')
  //result = []
  //prev = []
  //for (val of iterable) {
  //cont = 0
  //for (com of prev) {
  //console.log(com, " : ", val)
  //}
  //if (!prev.includes(val)) {
  //prev.push(val);

  //}
  //}

  //console.log(prev)
  //return result
  //

  //return (!Array.isArray(iterable) ? iterable.split('') : iterable).map((val, i) => (!isNaN(val) ? parseInt(val) : val) != iterable[i - 1] ? val : '').filter(Boolean)
  //return (Array.isArray(iterable) ? iterable : iterable.split('')).filter((val, i) => val !== iterable[i - 1])
  return [...iterable].filter((val, i) => val !== iterable[i - 1])
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
