/* 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 
자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금
지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하
지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한
다.
여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 
한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 
위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
 */

function solution(dn, cn) {
  let answer = 0;

  // 날짜 1의 자리 숫자를 받고
  // 자동차 번호 2자리를 여러 개 받았을 때
  // 1의 자리가 서로 일치하면 갯수를 카운트 한다.

  for (let carNum of cn) {
    if (carNum[1] ===dn) {
      answer++;
    }
  }

  return answer;
}

console.log(solution('3', ['13', '73', '38', '41', '53', '92', '85']));


function solution(day, arr){
  let answer=0;
  for(let x of arr){
      if(x % 10==day) answer++;
  }
  
  return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));