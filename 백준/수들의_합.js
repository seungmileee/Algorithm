// 서로 다른 N개의 자연수의 합이 S라고 한다. S를 알 때, 자연수 N의 최댓값은 얼마일까?
// 첫째 줄에 자연수 S(1 ≤ S ≤ 4,294,967,295)가 주어진다.
// 첫째 줄에 자연수 N의 최댓값을 출력한다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

s = Number(input[0]);
let sum = 0;
let current = 0;

while (sum <= s) {
  current += 1;
  sum += current;
}

console.log(current - 1);
