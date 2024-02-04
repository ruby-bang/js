ara = "abcdefghijklmnopqrstuvwxyz"


//function high(x) {
//word = x.split(" ");
//word_int = word.map((val) => {
//return val.split('').map(x => ara.search(x) + 1).reduce((p, c) => p + c)
//});
//console.log(word_int)
//buff = word_int.reduce((p, c) => {
//return Math.max(p, c)
//})
//index = word_int.indexOf(buff);

//return word[index]
//}

//function high(x) {
//word = x.split(" ");
//return word[word.map((val) => val.split('').map(x => ara.search(x) + 1).reduce((p, c) => p + c)).reduce((p, c, i, arr) => c > arr[p] ? i : p, 0)]
//}

function high(x) {
  word = x.split(" ");
  return word[word.map(val => val.split('').map(e => e.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1).reduce((p, c) => p + c)).reduce((p, c, i, arr) => c > arr[p] ? i : p, 0)]
}

result = high("man i need a taxi up to ubud")
console.log(result)

//console.log(ara.split('').forEach((x, ind) => {
//console.log(ind + 1)
//}))
