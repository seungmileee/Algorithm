function solution(n) {
  // 정수 n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 함수를 작성하라.

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
