function solution(participant, completion) {
  // 참여선수 이름 배열 participamt, 완주 선수 이름 배열 completion
  // 완주하지 못한 선수의 이름을 return 하도록
  // completion의 길이는 participant의 길이보다 1 작다
  // 참가자의 이름은 1개 이상, 20개 이하의 알파벳 소문자
  // 배열 정렬 후 비교하기

  participant = participant.sort();
  completion = completion.sort();

  let fail = [];

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
