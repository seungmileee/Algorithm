function solution(n) {
  // 자연수 n이 주어지면 n의 각 자릿수의 합을 구해서 return
  // ex) n=123 이면 1+2+3=6 을 return

  let arr = String(n).split("");

  let numArr = arr.map((el) => {
    return Number(el);
  });

  return numArr.reduce((alc, elc) => {
    return alc + elc;
  });
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
