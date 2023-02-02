function solution(dot) {
  // 4분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분이다
  // x 좌표와 y 좌표가 모두 양수이면 제 1사분면, x 좌표가 음수 y 좌표가 양수이면 제 2사분면, x 좌표와 y 좌표가 모두 음수이면 제 3사분면, x 좌표가 양수, y 좌표가 음수이면 제 4사분면에 속한다.
  // x 좌표 (x,y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어진다. 좌표 dot이 사분면 중 어디에 속하는지 1,2,3,4 중 하나를 return 하도록 함수를 완성하라.

  let x = dot[0];
  let y = dot[1];

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else {
    return 4;
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
