// 문제 31 : 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)
arr[i];

// 2)
arr.push(5);

// 3)
arr.slice();

// 4)
arr.pop();

// 5)
arr.includes(5);

// 정답 : 3, 5
// 3 -> slice는 입력 데이터의 크기와 배열의 길이에 따라 처리 시간이 달라지기 때문에 O(n)
// 5 -> includes()는 배열에 특정 값이 포함되어 있는지 검사할 때, 배열의 첫 번째 요소부터 해당 값까지 순차적으로 검사해야 하므로 O(n)
