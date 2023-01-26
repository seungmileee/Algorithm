function solution(price) {
  // 머쓱이네 옷가게는 10만원 이상 사면 5%, 30만원 이상 사면 10%, 50만원 이상 사면 20%를 할인해준다.
  // 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 함수를 완성하라

  if (price >= 100000 && price < 300000) {
    return Math.floor(price - price * 0.05);
  } else if (price >= 300000 && price < 500000) {
    return Math.floor(price - price * 0.1);
  } else if (price >= 500000) {
    return Math.floor(price - price * 0.2);
  } else {
    return price;
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
