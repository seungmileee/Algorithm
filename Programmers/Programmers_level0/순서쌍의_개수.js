function solution(n) {
  // 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a,b)로 표기한다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return 하도록 함수를 완성하라.
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
