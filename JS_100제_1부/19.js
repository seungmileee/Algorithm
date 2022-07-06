// 문제 19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면 a의 b승을 구하는 프로그램을 작성하시오.

let power = prompt("a의 b승을 계산합니다. a와 b를 입력해주세요.")
  .split(" ")
  .map((el) => parseInt(el, 10));

console.log(Math.pow(power[0], power[1]));

// 입력 : 10 3
// 출력 : 1000
