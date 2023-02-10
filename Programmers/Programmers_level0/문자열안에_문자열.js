function solution(str1, str2) {
  // 문자열 str1, str2가 매개변수로 주어진다. str1 안에 str2가 있다면 1을 없다면 2를 return 하도록 함수를 완성하라
  return str1.includes(str2) ? 1 : 2;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
