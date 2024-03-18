// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오 (2750)
// 첫째 줄에 수의 개수 N이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다.
// 이 수는 절댓값이 1,000,000 보다 작거나 같은 정수이다. 수는 중복되지 않는다
// https://www.acmicpc.net/problem/2751

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = 0;
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
