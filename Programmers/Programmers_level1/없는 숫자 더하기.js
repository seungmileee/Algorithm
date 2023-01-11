function solution(numbers) {
  // 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어진다
  // numbers 에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 함수를 완성시켜라
  // 1 <= numbers.length <= 9
  // numbers의 모든 원소는 서로 다르다.

  let newArr = [];
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      newArr.push(i);
    }
  }

  return newArr.reduce((alc, elc) => {
    return alc + elc;
  });
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
