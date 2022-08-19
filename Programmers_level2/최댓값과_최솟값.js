function solution(s) {
  // 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
  // str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값)(최대값)" 형태의 문자열을 반환하는 함수 solution을 완성하세요
  // ex) s가 "1 2 3 4"라면 "1 4"를 리턴
  // ex) s가 "-1 -2 -3 -4"라면 "-4 -1"을 리턴

  const arr = s
    .split(" ")
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);

  const minMax = [];
  minMax.push(arr[0]);
  minMax.push(arr[arr.length - 1]);
  return minMax.join(" ");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
