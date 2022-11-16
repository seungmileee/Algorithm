function solution(x) {
  // 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다.
  // 예를 들어 18의 자릿수 합은 1+8=9 이고 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
  // 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성하라

  let arr = x
    .toString()
    .split("")
    .map((num) => parseInt(num, 10));
  let sum = arr.reduce((alc, elc) => alc + elc);
  return x % sum === 0 ? true : false;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
