function solution(my_string) {
  // 문자열 my_string이 매개변수로 주어진다. my_string 안의 모든 자연수들의 합을 return 하도록 함수를 완성하라.
  let arr = my_string.split("").map((el) => parseInt(el, 10));
  arr = arr.filter((el) => typeof el === "number");
  return arr;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
