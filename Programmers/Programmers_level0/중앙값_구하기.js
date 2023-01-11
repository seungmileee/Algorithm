function solution(array) {
  // 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미한다
  // 예를 들어 1, 2, 7, 10, 11의 중앙값은 7이다
  // 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 함수를 완성하라 (array의 길이는 홀수이다)

  // 배열을 오름차순으로 정렬한 후, 중앙값 구하기
  let sortedArr = array.sort((a, b) => a - b);
  let middleNum = Math.floor(sortedArr.length / 2);
  return sortedArr[middleNum];
}

//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
