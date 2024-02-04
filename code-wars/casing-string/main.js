String.prototype.toJadenCase = function() {
  return this.replace(/(\s.)/g, val => val.toUpperCase())

};

//String.prototype.toJadenCase = function() {
//return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
//};


//String.prototype.toJadenCase = function() {
//return this.split(' ').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ')
//};

str = "most Trees Are Blue"
console.log(str.toJadenCase())
