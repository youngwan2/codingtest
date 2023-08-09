function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toUpperCase()) {
      answer += s.toLowerCase();
    } else {
      answer += s.toUpperCase();
    }
  }
  return answer;
}

const str = 'StuDY';
console.log(solution(str));
