function solution(n) {
  // 함수 solution은 정수 n을 매개변수로 입력받습니다.
  // n의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
  // ex) n이 118372면 873211을 리턴

  const sortArr = String(n)
    .split("")
    .sort((a, b) => b - a);
  return parseInt(sortArr.join(""), 10);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
