function maskyfi(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}


const result = maskyfi("Nananananananananananananananana Batman!")
console.log(result)
