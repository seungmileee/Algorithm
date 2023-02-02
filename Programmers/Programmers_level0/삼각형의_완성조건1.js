function solution(sides) {
  // 선분 세 개로 삼각형을 만들기 위해서는 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야 한다.
  // 삼각형의 세 변의 길이가 담긴 배열 sides가 매개변수로 주어질 때, 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return 하도록 함수를 완성하라.

  let sorted = sides.sort((a, b) => a - b);
  if (sorted[2] < sorted[0] + sorted[1]) {
    return 1;
  } else {
    return 2;
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
