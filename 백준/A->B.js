// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
// 2를 곱한다. / 1을 수의 가장 오른쪽에 추가한다.
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.
// 첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.
// A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.
// https://www.acmicpc.net/problem/16953

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  result++;
}
if (flag) console.log(result);
else console.log(-1);
