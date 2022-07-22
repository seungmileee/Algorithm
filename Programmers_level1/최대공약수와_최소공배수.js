function solution(n, m) {
  // 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해보세요
  // 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다
  // 예를 들어 두 수 3,12의 최대 공약수는 3, 최소 공배수는 12이므로 [3,12]를 반환해야 합니다

  // 최대공약수: 공통되는 약수 중 가장 큰 수
  // 최소공배수: 공통되는 배수 중 가장 작은 수

  const arr = [];

  //최대공약수 구하기
  const minNum = n < m ? n : m;

  for (let i = minNum; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
      break;
    }
  }

  //최소공배수 구하기 (두 수의 곱 / 최대공약수)
  const maxNum = (n * m) / arr[0];
  arr.push(maxNum);

  return arr;
}
