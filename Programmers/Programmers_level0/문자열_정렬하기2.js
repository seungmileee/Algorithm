function solution(my_string) {
  // 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 함수를 완성하라

  return my_string.toLowerCase().split("").sort().join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
