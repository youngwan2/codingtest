

function solution(str) {
    let answer='';
    let regex = /[A-Z]/g
    const list = [...str.matchAll(regex)]
    for(let i=0; i<list.length; i++){
        answer+=list[i][0]
    }
    return answer.length

  }

 const str ='KoreaTimeGood'
  console.log(solution(str));
  


