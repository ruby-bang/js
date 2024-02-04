
//arr.map(val => {
//cnrt = 0;
//index = 0;
//val.forEach((e, i) => {
//if (e >= cnrt) {
//cnrt = e;
//index = i;
//} else {
//}
//if (i == e.length) {
//cnrt = 0;
//}
//console.log(cnrt, " : ", index)
//})
//})

//function longestSlideDown(pyramid) {
//let index = 0;
//ar = pyramid.map((item) => {
//curnt_out = 0;
//result = [];
//item.forEach(v => {
//curnt = 0;
//if (index > 0) {
//for (i = index - 1; i <= index + 1; i++) {
//if (curnt <= item[i]) {
//curnt = item[i]
//}
//}
//} else {
//for (i = 0; i <= index + 1; i++) {
//if (curnt <= item[i]) {
//curnt = item[i]
//}
//}
//}
//curnt_out = curnt
//}, 0)
//console.log(curnt_out)
//index = item.indexOf(curnt_out)
//console.log("index : ", index)
//result.push(curnt_out);
//return result
//})
//return ar.reduce((p, c) => parseInt(p) + parseInt(c), 0)
//}


//function longestSlideDown(pyramid) {
//let index = 0;
//ar = pyramid.map((item) => {
//curnt_out = 0;
//result = [];
//item.forEach(v => {
//curnt = 0;
//for (i = index; i <= index + 1; i++) {
//if (curnt <= item[i]) {
//curnt = item[i]
//}
//}
//curnt_out = curnt
//}, 0)
//console.log(curnt_out)
//index_buf = item.indexOf(curnt_out)
//if (index_buf < index) {
//index_buf = item.lastIndexOf(curnt_out);
//}
//index += 1;
//console.log("index : ", index)
//result.push(curnt_out);
//return result
//})
//return ar.reduce((p, c) => parseInt(p) + parseInt(c), 0)
//}


//function longestSlideDown(pyramid) {
//for (i = (pyramid.length - 2); i >= 0; i--) {
//for (j = 0; j <= i; j++) {
//pyramid[i][j] += (pyramid[i + 1][j] > pyramid[i + 1][j + 1]) ?
//pyramid[i + 1][j] :
//pyramid[i + 1][j + 1]
//}
//}
//return pyramid[0][0]
//}


function longestSlideDown(pyramid) {
  return pyramid.reduceRight((p, cur) =>
    cur.map((val, i) =>
      val + Math.max(p[i], p[i + 1])))[0]
}

const arr = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]];
console.log(longestSlideDown(arr))

