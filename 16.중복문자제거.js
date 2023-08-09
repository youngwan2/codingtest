function solution(str) {
  let answer = '';

  // 일단 임의의 문자열을 저장하고, 해당 문자열의 갯수를 카운트할 객체를 생성
  const split = str.split('');  /* ['k', 'k', 's', 'e', 't'] */
 

  const filter = split.filter((s, i) => { /* [ 'k', 's', 'e', 't' ] */
    return split.indexOf(s) === i;
  });

  for (let s of filter) { /* kset */
    answer += s;
  }
  return answer;
}
console.log(solution('ksekkset'));
