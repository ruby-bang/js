const fs = require('fs')

function kangoro(x1, v1, x2, v2) {
  //(x1 - x2) % (v2 - v1) == 0 && (x1 - x2) / (v2 - v1) > 0
  if (x1 < x2 && v1 > v2) {
    return "YES"
  }
  return "NO"
}
const result = kangoro(21, 6, 47, 3)
console.log(result) 
