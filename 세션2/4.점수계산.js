// 1번 문제를 맞으면 1점을 카운트하고,
// 앞의 문제를 틀리다가 답이 맞는 처음 문제도 1점 카운트
// 연속적으로 답이 맞으면 1++ 하여 증가한다.
// 틀린 문제는 0점으로 처리한다.

function solution(len, arr) {
  let answer = 0;
  let juge = 0;
  let list = [];
  // 0이라면 배열에 0을 푸쉬하고 juge 변수를 0으로 초기화
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      juge = 0;
      list.push(arr[i]);
      // 0 이 아닌 경우에는 juge를 ++ 하고 해당 값을 list 에 넣는다.
    } else {
      juge += 1;
      list.push(juge);
    }
  }
  for (let num of list) {
    answer += num;
  }
  return answer;
}

console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
