function solution(numbers) {
  // 정수 배열 numbers가 매개변수로 주어진다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return 하도록 함수를 완성하라

  let minus = [...numbers].filter((el) => el < 0).sort((a, b) => a - b);
  let sort = [...numbers].sort((a, b) => b - a);

  if (minus[0] * minus[1] > sort[0] * sort[1]) {
    return minus[0] * minus[1];
  } else return sort[0] * sort[1];
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
