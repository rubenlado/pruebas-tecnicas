import './style.css'

// [1,2,2,3,4,5] , o: 5

//[1, 4, 5, 6, 2] o: 7

//WITHOUT BACKTRACKING
export function sumFinderMal(list, objective) {

  return list.reduce((acc, curr, index)=> {
    let sum = curr;
    let result = [curr];
    for (let i = 0; i < list.length; i++){

      if (i === index){
        continue;
      }

      if (sum + list[i] <= objective) {
        result.push(list[i])
        sum += list[i]
        continue; 
      }

      if (sum !== objective) {
        result = [];
        break;
      }
     break;
    }

    if (result.length){
      acc.push(result)
    }

    return acc;

  }, [])

}

console.log(sumFinderMal([1, 5, 3, 2], 6))




//WITH BACKTRACKING 
export function sumFinder(list, objective){




  let result = []
  function findSum(sum){

    return
  }

  findSum(0, [])

}