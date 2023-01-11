function solution(absolutes, signs) {
  // absolutes -> 정수들의 절댓값을 차례대로 담은 정수 배열
  // signs => 정수들의 부호를 차례대로 담은 불리언 배열
  // sign[i]가 true이면 abosulte[i]는 양수
  // 실제 정수들의 합을 구하여 return 하라

  // 양수를 넣어줄 배열과 음수를 넣어줄 배열 각각 만들어주기
  // 양수일 경우 그냥 push, 음수일 경우 절댓값[i] * -1 하고 push해주기

  let positive = [];
  let negative = [];

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      positive.push(absolutes[i]);
    } else {
      negative.push(absolutes[i] * -1);
    }
  }

  // 두 양수, 음수 배열을 concat 메서드 이용해 합쳐주고 배열 합 구해서 리턴하기

  let arr = positive.concat(negative);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
