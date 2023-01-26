function solution(money) {
  // 머쓱이는 추운 날에도 아이스 아메리카노를 마신다. 아이스 아메리카노는 한 잔에 5,500원이다.
  // 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 함수를 완성하라

  let americano = Math.floor(money / 5500);
  let change = money % 5500;
  return [americano, change];
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
