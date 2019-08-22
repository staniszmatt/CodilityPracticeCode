function returnNoMatchPair (numberArray){
  let counter = 0;
  let noMatch = false; 
  let tempNumberArray = numberArray; 

  while (!noMatch){
    let firstNumber = tempNumberArray[0]; 
    if (firstNumber !== tempNumberArray[counter+1] && tempNumberArray[counter+1] !== undefined){
      counter++; 
    } else if (firstNumber === tempNumberArray[counter+1]){
      tempNumberArray.splice(0,1);
      tempNumberArray.splice(counter,1);
      counter = 0;
    } else {
      return firstNumber; 
      noMatch = true; 
    }
  }
}