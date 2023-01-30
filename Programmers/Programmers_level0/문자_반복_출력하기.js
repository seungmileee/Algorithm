function solution(my_string, n) {
  // 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 함수를 완성하라.
  return my_string
    .split("")
    .map((el) => el.repeat(n))
    .join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
