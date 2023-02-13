function solution(my_string) {
  // 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순으로 정렬한 리스트를 return 하도록 함수를 완성하라

  let arr = my_string.split("").map((el) => parseInt(el, 10));
  return arr.filter((el) => !isNaN(el)).sort((a, b) => a - b);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
