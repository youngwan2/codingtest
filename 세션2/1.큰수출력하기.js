// 자신의 바로 앞 수 보다 큰 수만 출력하는 프로그램

function solution(ns) {
  let answer = [];
  answer.push(ns[0]);
  for (let i = 0; i < ns.length; i++) {
    if (ns[i] > ns[i - 1]) {
      answer.push(ns[i]);
    }
  }
  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
