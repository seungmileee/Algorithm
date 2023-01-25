function solution(array) {
  // 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미한다.
  // 정수 배열 array가 매배변수로 주어질 때, 최빈값을 return 하도록 함수를 완성하라. 최빈값이 여러 개면 -1을 return 하라.

  if (array.length === 1) return array[0];

  const obj = {};
  const answer = [];

  array.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  for (let key in obj) {
    answer.push([key, obj[key]]);
  }
  answer.sort((a, b) => b[1] - a[1]);

  if (answer[0][1] === answer[1][1]) return -1;

  return Number(answer[0][0]);
}

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
