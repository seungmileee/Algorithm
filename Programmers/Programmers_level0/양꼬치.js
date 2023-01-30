function solution(n, k) {
  // 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 준다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원이다.
  // 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총 얼마를 지불해야 하는지 return 하도록 함수를 완성하라
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
