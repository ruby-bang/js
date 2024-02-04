const fs = require('fs')
var twoSum = function(nums, target) {
  result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j + 1 + i] == target) {
        result.push(i, j + 1 + i)
      }
    }
  }
  //return nums.flatMap((val, i) => nums.map((_, j) => val + nums[j + i + 1] == target ? [i, j + i + 1] : null)).filter((item) => item !== null)[0]
  //result_ = [];
  //nums.some((val, i) => nums.some((jval, j) => val + nums[j + 1] == target ? result_.push(i, j + 1) > 0 : false)
  //)
  //console.log(result_)
  //result = [];
  //nums.some((val, i) => {
  //return nums.some((jval, j) => {
  //if (val + nums[j + 1] == target) {
  //return result.push(i, j + 1) > 0
  //}
  //});
  //});

  //result1 = [];
  //nums.reduce((p, c, i, arr) => {
  //if (p + c == target) {
  //console.log(arr[p])
  //}
  //return c
  //}, 0)
  //nums.forEach((val, i) => {
  //if (val + nums[i + 1] == target) {
  //result.push(i);
  //result.push(i + 1);
  //}
  //});
  //console.log(result)
  return result;
};

file = fs.readFileSync("input.txt", 'utf8');
nums = file.split(', ');
target = 19999

reut = twoSum(nums, target)
console.log(reut)
