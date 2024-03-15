// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오 (2750)
// https://www.acmicpc.net/problem/2750

let fs = require("fs");
let input = fs.feadFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 0; i <= n; i++) {
  arr.push(Number(input[i]));
}
vvvvvvvvvvvvvvvvvvvvvvvvvvvv;

arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
