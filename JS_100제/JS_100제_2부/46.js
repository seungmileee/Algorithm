// 문제 26 : 각 자리수의 합 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요

let sum = [];
let str = "";

for (let i = 1; i <= 20; i++) {
  str = str + i;
}

sum = str
  .split("")
  .map((el) => parseInt(el, 10))
  .reduce((alc, elc) => alc + elc);

console.log(sum);
