function solution(num, str) {
    let answer = '';
    let temp =str[0] // str 중에서 임의의 요소를 저장함(비교용도)
    for(let i=0; i<num; i++){
        if(temp.length<str[i].length)
            temp = str[i]
    }
  
    return answer = temp;
  }
  
  const str = ['teacher','timeendgame','student','beautiful','good'];
  console.log(solution(5, str));
  