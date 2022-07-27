// 문제 50 : 버블정렬 구현하기
// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다.
// 시간복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

//버블정렬 : 서로 인접한 두 원소를 비교하여, 크기가 순서대로 되어 있지 않으면 서로 교환하는 알고리즘

function bubble(arr) {
  let result = arr.slice();
  let temp = 0;

  for (let i = 0; i < result.length - 1; i++) {
    // for ('빈 칸을 채워주세요')
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        // 빈 칸을 채워주세요
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(bubble(items));
