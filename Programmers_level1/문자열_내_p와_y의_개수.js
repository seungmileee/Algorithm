function solution(s) {
  // 대문자와 소문자가 섞여있는 문자열 s가 주어진다
  // s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false를 리턴하라
  // 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않는다

  // ex) s = 'pPoooyY' -> return true
  // ex) s = 'PyY' -> return false

  s = s.toLowerCase();

  let p = s.split("").filter((el) => el === "p");
  let y = s.split("").filter((el) => el === "y");

  if (p.length === y.length) {
    return true;
  } else {
    return false;
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
