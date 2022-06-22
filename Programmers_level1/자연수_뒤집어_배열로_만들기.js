function solution(n) {
  // 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태를 리턴
  // 예를 들어 n이 12345 이면 [5,4,3,2,1]

  let arr = String(n).split("");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(Number(arr[i]));
  }
  return newArr;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
