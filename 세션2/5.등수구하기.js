// 같은 점수가 입력될 경우 높은 등수로 동일처리한다.
// 가정 높은 점수가 92점으로 3명이면 1등이 3명이고 그 다음 학생은 4등이 된다.

function solution(len, arr) {
  let answer = 0;

  let max = arr[0];
  let rank = 1;
  let rankList = Array.fill(0, 1, len);
  for(let i=0;i<len; i++){
    
  }
 // for (let num of arr) {
 //   if (max < num) {
 //     max=num;
 //     rankList
 //   }
 // }

  return answer;
}

console.log(solution(5, [87, 89, 92, 100, 76]));
