function count(s, t, a, b, aple, orange) {

  let apple_count = aple.filter(val => val + a <= t && val + a >= s).length
  let orange_count = orange.filter(val => val + b <= t && val + b >= s).length

  console.log(apple_count)
  console.log(orange_count)
  //aple_count = 0
  //aple.map(val => {
  //buff = val + a
  //aple_count += (buff >= s && buff <= t) ? 1 : 0
  //})
  //orange_count = 0
  //orange.map(val => {
  //buff = val + b
  //orange_count += (buff >= s && buff <= t) ? 1 : 0
  //})

  //console.log(aple_count)
  //console.log(orange_count)
}

apel = [-2, 2, 1]
orange = [5, -6, -7]

count(7, 11, 5, 15, apel, orange)
