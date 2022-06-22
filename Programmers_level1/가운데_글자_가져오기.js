function solution(s) {
  // 단어 s의 가운데 글자를 반환
  // 단어의 길이가 짝수라면 가운데 두 글자를 반환한다
  let idx = 0;

  if (s.length % 2 !== 0) {
    idx = Math.ceil(s.length / 2);
    return s.charAt(idx - 1);
  }
  if (s.length % 2 === 0) {
    idx = s.length / 2;
    return s.slice(idx - 1, idx + 1);
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
