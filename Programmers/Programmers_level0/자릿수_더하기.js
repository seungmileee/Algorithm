function solution(n) {
  // 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return 하도록 함수를 완성하라
  let arr = n
    .toString()
    .split("")
    .map((el) => parseInt(el, 10));
  let sum = 0;
  arr.forEach((el) => (sum = sum + el));
  return sum;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
