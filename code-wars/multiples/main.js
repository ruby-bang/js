function solution(number) {
  var n5 = 0, n3 = 0, n15 = 0;
  for (i = 1; i < number; i++) {
    buf1 = 5 * i;
    buf2 = 3 * i;
    buf3 = 15 * i;
    if (buf1 < number) {
      n5 += buf1;
    }
    if (buf2 < number) {
      n3 += buf2;
    }
    if (buf3 < number) {
      n15 += buf3;
    }
  }
  return n5 + n3 - n15;
}

result = solution(72713)
console.log("result :", result)

