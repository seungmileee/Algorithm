// 문제 49 : 최댓값 구하기
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다
// 주어진 숫자들 중 최댓값을 반환하라

var num = prompt("10개의 숫자를 공백으로 구분하여 입력해주세요")
  .split(" ")
  .map((el) => parseInt(el, 10));

function maxNum(arr) {
  return Math.max.apply(null, arr);
}

console.log(maxNum(num));
