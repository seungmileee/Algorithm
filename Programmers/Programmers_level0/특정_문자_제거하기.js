function solution(my_string, letter) {
  // 문자열 my_string과 문자 letter이 매개변수로 주어진다. my_string에서 letter를 제거한 문자열을 return 하도록 함수를 완성하라
  return my_string
    .split("")
    .filter((el) => el !== letter)
    .join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
