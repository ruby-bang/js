const fs = require('fs')
const file = "sample.txt"

content = fs.readFileSync(file, 'utf8',).trim().split(' ').map(line => line.split('\n'))

console.log(content)
