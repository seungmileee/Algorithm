function solution(price, money, count) {
  // 어느 놀이공원의 원래 이용료는 price 원인데, 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받기로 함.
  // 즉, 처음 이용료가 100원이었다면 2번째는 200원, 3번째는 300원으로 요금이 인상됨.
  // 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자르는지를 return 하라.
  // 단, 금액이 부족하지 않으면 0을 리턴하라.

  // 놀이기구의 이용료 price : 1 <= price <= 2500, price는 자연수
  // 처음 가지고 있던 금액 money : 1 <= money <= 1,000,000,000 , money는 자연수
  // 놀이기구의 이용 횟수 count : 1 <= count <= 2500 , count는 자연수

  // price는 count 될수록 couny만큼 가격이 올라감.
  // 3인 놀이기구를 4번 -> 3 + 6 + 9 + 12

  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }

  if (sum <= money) {
    return 0;
  } else {
    return sum - money;
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
