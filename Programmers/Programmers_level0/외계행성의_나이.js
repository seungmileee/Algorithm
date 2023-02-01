function solution(age) {
  // 우주 여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 되었다.
  // 입국심사에서 나이를 말해야 하는데 PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있다. a는 0, b는 1, c는 2, ..., j는 9이다.
  // 예를 들어 23살은 cd, 51살은 fb로 표현한다. 나이 age가 매개변수로 주어질 때, PROGRAMMERS-962 식 나이를 return 하도록 함수를 완성하라
  const ageStr = "abcdefghij";
  const ageArr = String(age).split("");
  return ageArr.map((el) => ageStr[el]).join("");
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
