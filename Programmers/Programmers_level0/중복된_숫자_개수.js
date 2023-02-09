function solution(array, n) {
  // 정수가 담긴 배열 array와 정수 n이 매개변수로 있을 때, array에 n이 몇 개 있는지를 return 하도록 함수를 완성하라
  let count = 0;
  array.forEach((el) => {
    if (el === n) count++;
  });
  return count;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
