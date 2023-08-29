/* a,b 두사람이 가위바위보 계임을 한다. 총 n번 게임 진행해서 
a가 이기면 a 출력, b가 이기면 b를 출력한다. 비기면 d를 출력 

1 : 가위
2 : 바위
3 : 보

*/

function solution(len, A, B) {
  let answer='';

  for (let i = 0; i < len; i++) {
    if (A[i] === 1 && B[i] === 3) {
      answer+='A\n';
    } else if (A[i] === 2 && B[i] === 1) {
      answer+='A\n';
    } else if (A[i] === 3 && B[i] === 2) {
      answer+='A\n';
    } else if (A[i] === B[i]) {
      answer+='D\n';
    } else {
      answer+='B\n';
    }

  }
  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
