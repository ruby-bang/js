var input = document.getElementsByName('pass')
var result = document.getElementById('result')

var hidingText = "";

function show() {
  var result = document.createElement('input')
  result.type = "text"
  result.value = input.value
  result.id = "pass"
  input.replaceChild(result, input)


  console.log(result.value)
}
