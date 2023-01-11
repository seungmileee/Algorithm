function solution(numer1, denom1, numer2, denom2) {
  // 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom2
  // 두 번째 분수의 분자와 분모를 뜻하는 numer1, denom2 가 매개변수로 주어진다
  // 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 함수를 완성하라

  let arr = [];

  // 분자 구하기
  let top = numer1 * denom2 + numer2 * denom1;

  // 분모 구하기
  let bottom = denom1 * denom2;

  // 기약분수로 만들기
  let num = 0;
  for (let i = 0; i <= top; i++) {
    if (top % i === 0 && bottom % i === 0) {
      num = i;
    }
  }

  arr[0] = top / num;
  arr[1] = bottom / num;
  return arr;
}

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
