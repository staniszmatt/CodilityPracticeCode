const numArray = [-1,1,2,3,5];

function testing(numberList) {
  let matchedNum = true; 
  let numToMatch = 0; 

  while (matchedNum){
    numToMatch++;
    matchedNum = numMatchCheck(numToMatch, numberList);
  }
  return numToMatch; 
}

function numMatchCheck(number, numArray){
  for (let numIndex = 0; numIndex < numArray.length; numIndex++){
    if (number === numArray[numIndex]){
      return true; 
    }
  }
  return false; 
}