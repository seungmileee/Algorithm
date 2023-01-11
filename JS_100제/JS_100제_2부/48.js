// 문제 48 : 대소문자 바꿔서 출력하기
// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

var text = prompt("문자열을 입력해주세요!").split("");

function upperLower(arr) {
  return arr
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");
}

console.log(upperLower(text));
