// 문제 30 : 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문잘르 찾아보려고 합니다.
// 첫 번째 입력에서는 문자열이 입력되고 두 번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

var text = prompt("문자열을 입력해주세요");
var find = prompt("찾을 문자를 입력해주세요");

if (text.includes(find)) {
  console.log(text.indexOf(find));
} else {
  console.log("Not included");
}
