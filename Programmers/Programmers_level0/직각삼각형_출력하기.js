// '*'의 높이와 너비를 1이라고 했을 때, '*'을 이용해 직각 이등변 삼각형을 그리려고 한다. 정수 n이 주어지면 높이와 너비가 n인 직각 이등변 삼각형을 출력하도록 코드를 작성하라.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let longStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      longStr += "*";
    }
    longStr += "\n";
  }
  console.log(longStr);
});

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
