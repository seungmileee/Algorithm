function solution(arr) {
  // 배열에서 가장 작은 수를 제거한 배열을 리턴하는 함수
  // 만약 리턴하려는 배열이 빈 배열일 경우에는 배열에 -1을 채워서 리턴

  // ex) arr = [4,3,2,1] -> return [4,3,2]
  // ex) arr = [10] -> return [-1]

  if (arr.length === 0 || arr.length === 1) {
    return [-1];
  }

  var min = Math.min(...arr);

  return arr.filter((el) => el !== min);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
