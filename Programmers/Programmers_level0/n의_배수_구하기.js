function solution(n, numlist) {
  // 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return 하도록 함수를 완성하라

  return numlist.filter((el) => el % n === 0);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
