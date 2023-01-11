function solution(n) {
  // 정수의 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성하라.
  // 약수 -> 약수인 수로 나누었을 때 나머지가 0이다
  // 약수인 수를 배열에 넣어주고 reduce로 더해주기

  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n === 0) {
      return 0;
    }

    if (n % i === 0 && n !== 0) {
      arr.push(i);
    }
  }

  return arr.reduce((alc, elc) => {
    return alc + elc;
  });
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
