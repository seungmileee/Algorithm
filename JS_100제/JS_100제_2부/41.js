// 문제 41 : 소수 판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요
// 소수이면 YES, 아니면 NO로 출력해주세요
// (소수란, 1과 자기 자신만으로 나누어 떨어지는, 1보다 큰 양의 정수를 의미합니다.)

var num = parseInt(prompt("숫자를 입력해주세요"), 10);

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log("NO");
    break;
  } else {
    console.log("YES");
    break;
  }
}
