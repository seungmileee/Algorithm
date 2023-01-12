function solution(n) {
  // 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return 하도록 함수를 완성하라
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
