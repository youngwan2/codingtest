function solution(str) {
  let answer = '';
  for (let s of str) {
    if (s === s.toLowerCase()) answer += s.toUpperCase();
  }
  return answer;
}

const str = 'ItisTimeToStudy';
console.log(solution(str));
