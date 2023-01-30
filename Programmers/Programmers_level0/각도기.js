function solution(angle) {
  // 각에서 0도 초과 90도 미만은 예각
  // 90도는 직각
  // 90도 초과 180도 미만은 둔각
  // 180도는 평각으로 분류한다.
  // 각 angle이 매개변수로 주어질 때, 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return 하도록 함수를 완성하라.

  if (0 < angle && angle < 90) return 1;
  if (angle === 90) return 2;
  if (90 < angle && angle < 180) return 3;
  if (angle === 180) return 4;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
