function solution(hp) {
  // 개미 군단이 사냥을 나가려고 한다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리거 나가려고 한다.
  // 장군개미는 5의 공격력을, 병정개미는 3의 공격력을, 일개미는 1의 공격력을 가지고 있다. 예를 들어, 체력 23의 여치를 사냥하려고 하면 일개미 23마리를 데리고 가도 되지만 장군개미 4마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥을 할 수 있다.
  // 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return 하도록 함수를 완성하라

  let ant = 0;

  while (true) {
    if (hp >= 5) {
      hp = hp - 5;
      ant += 1;
    } else if (hp < 5 && hp >= 3) {
      hp = hp - 3;
      ant += 1;
    } else if (hp === 2 || hp === 1) {
      hp = hp - 1;
      ant += 1;
    } else if (hp <= 0) {
      break;
    }
  }
  return ant;
}
//출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
