function solution(rsp) {
  // 가위는 2 바위는 0 보는 6로 표현한다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp 가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 순서대로 나타낸 문자열을 return 하도록 solution 함수를 완성하라.
  const arr = rsp.split("").map((el) => parseInt(el, 0));
  return arr
    .map((el) => {
      if (el === 0) {
        return 5;
      } else if (el === 2) {
        return 0;
      } else {
        return 2;
      }
    })
    .join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
