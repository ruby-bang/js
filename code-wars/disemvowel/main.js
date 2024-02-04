function disemvowel(str) {
  return str.replace(/[aiueo]/gi, '');
}


function disemvowel(str) {
  const vowel = ['a', 'i', 'u', 'e', 'o']
  return str.split('').filter((item) =>
    !vowel.find(e => e == item.toLowerCase())
  ).join('');
}

function disemvowel(str) {
  const vowel = ['a', 'i', 'u', 'e', 'o']
  var filter = []
  for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index)
    if (!vowel.some(e => e == element.toLowerCase())) {
      filter.push(element)
    }
  }
  return filter.join('')
}


const result = disemvowel("This website is for losers LOL!")
console.log(result)
