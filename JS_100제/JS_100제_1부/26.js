// 문제 26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune 입니다.
// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어주세요.

function universe(n) {
  if (n === "수성") {
    return "Mercury";
  }
  if (n === "금성") {
    return "Venus";
  }
  if (n === "지구") {
    return "Earth";
  }
  if (n === "화성") {
    return "Mars";
  }
  if (n === "목성") {
    return "Jupiter";
  }
  if (n === "토성") {
    return "Saturn";
  }
  if (n === "천왕성") {
    return "Uranus";
  }
  if (n === "해왕성") {
    return "Neptune";
  }
}

let u = prompt("행성의 한글 이름을 입력해주세요!");

console.log(universe(u));
