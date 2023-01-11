function solution(seoul) {
  // string형 배열 seoul의 element 중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 string을 반환하라
  // seoul에 "Kim"은 오직 한 번만 나타나며, 잘못된 값이 입력되는 경우는 없다.

  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
