/* N개의 문자열이 입력되면 중복된 문자열은 제거하고, 출력하기 */

function solution(strList) {
  let answer = '';

  const filter = strList.filter((str, i) => {
    return  strList.indexOf(str) === i;
  });

  for (let i = 0; i < filter.length; i++) {
    if(typeof filter[i] !=='number')
    answer += filter[i]+'\n';
  }
  return answer;
}

const strList = [5, 'good', 'time', 'good', 'time', 'student'];
console.log(solution(strList));
