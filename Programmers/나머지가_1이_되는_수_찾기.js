function solution(n) {
  // 자연수 n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 리턴

  for (let x = 1; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
