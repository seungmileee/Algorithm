function solution(array) {
  // 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 함수를 완성하라

  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
