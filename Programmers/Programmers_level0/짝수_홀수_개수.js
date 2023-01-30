function solution(num_list) {
  // 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 함수를 완성하라
  let odd = 0;
  let even = 0;
  num_list.forEach((el) => (el % 2 !== 0 ? (odd += 1) : (even += 1)));
  return [even, odd];
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
