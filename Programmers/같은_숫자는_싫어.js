function solution(arr) {
  // 배열 arr의 각 원소는 0부터 9까지로 이루어져 있음
  // arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 함
  // 단 제거된 후 남은 수들을 반환할 때 배열 arr의 원소들의 순서를 유지해야 함
  // ex) arr=[1,1,3,3,0,1,1] 이면 [1,3,0,1]을 리턴

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
