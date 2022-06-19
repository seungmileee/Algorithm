function solution(arr, divisor) {
  //arr의 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
  // divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환
  // arr는 자연수를 담은 배열이며, divisor는 자연수이다.
  // arr는 길이 1 이상인 배열이다.
  // ex) arr=[5,9,7,10] , divisor = 5라면 return [5,10]

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      newArr.push(arr[i]);
    }
  }

  newArr.length === 0 ? (newArr = [-1]) : newArr.sort((a, b) => a - b);
  return newArr;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
