function solution(s) {
  // JadenCase -> 모든 단어의 첫 문자가 대문자이고 그 이외의 알파벳은 소문자인 문자열
  // 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 된다.
  // 문자열 s를 JadenCase로 바꾼 문자열을 리턴하라

  // s -> 알파벳, 숫자, 공백문자로 이루어짐
  // 숫자는 단어의 첫 문자로만 나옴, 숫자로 이루어진 단어는 없음, 공백 문자가 연속해서 나올 수 있음.

  let arr = s.split(" ");

  return arr
    .map((el) => el.charAt(0).toUpperCase() + el.substring(1).toLowerCase())
    .join(" ");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
