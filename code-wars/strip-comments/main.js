function solution(text, markers) {
  console.log(text, " : ", markers)
  text.split('').map(val => {
    abc = "abcdifghijklmnopqrstuvwxyz"
    if (![...abc].includes(val)) {
      if (val == markers[0]) {
        console.log(val)
      }
    }
  });

}


text = 'aa bb # cc'
marker = ['#']
solution(text, marker)

