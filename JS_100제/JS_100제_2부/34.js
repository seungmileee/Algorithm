// 문제 34 : sort 구현하기
// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
// 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져서 한 번에 확인하고 싶어한다.
// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// 키는 공백으로 구분되어 입력된다.

var height = prompt("반 친구들의 키를 입력해주세요")
  .split(" ")
  .map((el) => parseInt(el, 10));

let count = 0;
let sorted = height.slice();

for (let i = 0; i < height.length; i++) {
  if (height[i] === sorted.sort((a, b) => a - b)[i]) {
    count += 1;
  }
}

if (count === height.length) {
  console.log("YES");
} else {
  console.log("NO");
}
