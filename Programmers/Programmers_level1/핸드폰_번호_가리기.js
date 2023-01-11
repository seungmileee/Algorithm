function solution(phone_number) {
  // 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *로 가린 문자열을 리턴하는 함수를 완성하라
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
