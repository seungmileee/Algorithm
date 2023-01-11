function solution(n) {
  // 임의의 양의 정수 n에 대해 n이 어떤 양의 정수 x의 제곱근인지 아닌지 판단하려 함
  // n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하라
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
