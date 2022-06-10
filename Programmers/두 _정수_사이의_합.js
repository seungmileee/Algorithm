function solution(a, b) {
  // 두 정수 a,b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수를 완성하라.
  // a와 b의 대소관계는 정해져 있지 않다
  // a와 b가 같은 경우 둘 중 아무거나 리턴하라.

  var answer = 0;
  if (a <= b) {
    for (i = a; i <= b; i++) {
      answer = answer + i;
    }
  }
  if (a > b) {
    for (i = b; i <= a; i++) {
      answer = answer + i;
    }
  }
  return answer;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
