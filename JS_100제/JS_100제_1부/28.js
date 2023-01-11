// 문제 28 : 2-gram
// 2-gram이란, 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 'Java'를 2-gram으로 반복해본다면
// J a
// a v
// v a

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요

var text = prompt("2-gram으로 출력할 문자열을 입력해주세요!");

for (let i = 0; i < text.length - 1; i++) {
  console.log(text[i], text[i + 1]);
}
