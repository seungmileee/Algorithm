function solution(num, k) {
  // 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return 하고 없으면 -1을 리턴하도록 함수를 완성하라
  let arr = String(num)
    .split("")
    .map((el) => parseInt(el, 10));
  return arr.indexOf(k) !== -1 ? arr.indexOf(k) + 1 : -1;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
