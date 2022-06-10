function solution(n) {
  // 길이가 n이고 "수박수박수"와 같은 패턴을 유지하는 문자열을 리턴하는 함수를 완성하라
  // ex) n이 4라면 "수박수박" / n이 5라면 "수박수박수"
  // n은 길이가 10,000 이하인 자연수이다

  let arr = [];
  let odd = 0;
  let even = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      odd = "수";
      arr.push(odd);
    } else {
      even = "박";
      arr.push(even);
    }
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
