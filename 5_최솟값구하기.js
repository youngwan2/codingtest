/* 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요. */
function solution(n) {
  let answer;

  let min = n[0]; // 비교하기 위한 초기값을 지정
  for (let i = 0; i < n.length; i++) {
    if (min > n[i + 1]) {
      min = n[i + 1];
    }
  }
  return (answer = min);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
