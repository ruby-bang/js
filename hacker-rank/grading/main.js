const fs = require('fs')
function gradingStudents(grades) {

  grades = grades.map(nume => {
    let buff = parseInt(nume / 5 + 1)
    let grede = buff * 5
    return (grede < 40) ? nume
      : ((grede - nume) < 3) ? grede
        : nume;
  })

  return grades

  //for (data of grades) {
  //buff = parseInt(data / 5 + 1)
  //let grade = buff * 5
  //if ((grade) < 40) {
  //result.push(data);
  //} else if ((grade - data) < 3) {
  //result.push(grade)
  //} else {
  //result.push(data);
  //}
  //}
}

function main() {
  const file = fs.readFileSync("input.txt", "utf8").trim().split('\n')
  const result = gradingStudents(file)
  console.log(result)
}

main()
