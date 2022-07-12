// 문제 33 : 거꾸로 출력하기
// 한 줄에 여러 개의 숫자가 입력되면 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

var text = prompt("숫자를 입력해주세요!")
  .split("")
  .map((el) => parseInt(el, 10));

let t = [];
for (let i = 1; i <= text.length; i++) {
  t.push(text[text.length - i]);
}

console.log(t.join(" "));
