
function findUniq(arr) {

  arr.forEach(val => {
    console.log(val, " : ", arr.indexOf(val), "==", arr.lastIndexOf(val))
  });
  return "unique number : " + arr.filter(val => arr.indexOf(val) == arr.lastIndexOf(val))[0]

  //count = [];
  //index = 0;
  //arr.forEach(item => {
  //if (!count.includes(item)) {
  //count.push(item)
  //} else {
  //index = count.indexOf(item)
  //}
  //})

  //return count.filter((_, i) => i != index).join()
}

console.log(findUniq([1, 0, 0]))
console.log(findUniq([0, 1, 0]))
console.log(findUniq([0, 0, 0, 0, 0, 0, 0, 0, 1]))
console.log(findUniq([8, 8, 8, 8, 8, 8, 8, 7]))
