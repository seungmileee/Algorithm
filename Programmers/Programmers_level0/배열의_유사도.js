function solution(s1, s2) {
  // 두 배열이 얼마나 유사한지 확인해보려고 한다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return 하도록 함수를 완성하라.

  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        count++;
      }
    }
  }
  return count;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
