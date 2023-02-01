function solution(emergency) {
  // 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 한다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return 하도록 함수를 완성하라.
  const sortedArr = emergency.slice().sort((a, b) => b - a);
  return emergency.map((el) => sortedArr.indexOf(el) + 1);
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
