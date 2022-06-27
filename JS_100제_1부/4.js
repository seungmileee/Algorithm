// 문제 4 : 변수의 타입2
// 다음 변수 a를 typeof(a)로 넣었을 때 출력된 값과 연결이 올바르지 않은 것은?

// 1
var a = 1;
console.log(typeof a === "number");

// 2
var a = 2.22;
console.log(typeof a === "boolean");
// console.log(tpyeof a === "number");

// 3
var a = "p";
console.log(typeof a === "string");

// 4
var a = [1, 2, 3];
console.log(typeof a === "object");

// 정답은 2
// a = 2.22 일 때, a의 type은 number 이다.
