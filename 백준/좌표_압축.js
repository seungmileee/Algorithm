// 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
// Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
// X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
// 첫째 줄에 N이 주어진다. 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.
// https://www.acmicpc.net/problem/18870

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);
