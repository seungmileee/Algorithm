function solution(n) {
  // 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라서 준다.
  // 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return하는 함수를 완성하라
  let pizzaBox = 6;
  while (pizzaBox % n !== 0) {
    pizzaBox += 6;
  }
  return pizzaBox / 6;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
