// 문제 27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두 번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

let name = prompt("이름을 입력해주세요!").split(" ");
let score = prompt("수학 점수를 입력해주세요!").split(" ");
let obj = {};

for (let i = 0; i < name.length; i++) {
  if (name.length === score.length) {
    obj[name[i]] = Number(score[i]);
  }
}

console.log(obj);
