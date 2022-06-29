function solution(s) {
  // 문자열 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 리턴하라 (내림차순으로 정렬)
  // s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주한다

  let arr = s.split("");

  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
  });

  return arr.join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
