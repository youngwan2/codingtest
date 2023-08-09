function solution(str) {
  let answer = "";
  const lower = str.toLocaleLowerCase();

  answer = lower[Math.floor(lower.length / 2)];

  if (lower.length % 2 === 0) {
    answer =
      lower[Math.floor(lower.length / 2 - 1)] +
      lower[Math.floor(lower.length / 2)];
  }

  return answer;
}

console.log(solution("study"));
