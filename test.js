function solution1(numberInput){

  for (numLoopIndex = 1; numLoopIndex <= numberInput; numLoopIndex++){
    let output = ""; 
    if (numLoopIndex % 2 === 0) {
      output+="Codility";
    }
    if (numLoopIndex % 3 === 0) {
      output+="Test";
    }
    if (numLoopIndex % 5 === 0) {
      output+="Coders";
    }
    if (!output){
      output = numLoopIndex; 
    }
    console.log(output);
  }
}

function solution(stirngPassword){
  let highestCorrectCount = 0; 
  let correctCount = 0; 
  let wrongCount = 0;  
  let capitalLetterCheck = false; 

  if (stirngPassword){
    stirngPassword.split("").forEach((singleLetter, index, stringArray)=>{
      if (isNaN(singleLetter)){
        correctCount++;
        if (highestCorrectCount < correctCount && capitalLetterCheck){
          highestCorrectCount = correctCount;
        }
        if (singleLetter === singleLetter.toUpperCase()){
          capitalLetterCheck = true; 
        }
      } else {
        correctCount = 0;
        capitalLetterCheck = false; 
        wrongCount++;
      }
    })
  }
  console.log("cap check ", capitalLetterCheck);
  console.log("HighCount ", highestCorrectCount);
  console.log("correct Count", correctCount);
  console.log("wrong Count ", wrongCount);
  if (wrongCount > 0) {
    console.log("Returned num check -1");
    return -1; 
  }
  if (capitalLetterCheck){
    return highestCorrectCount; 
  } else {
    console.log("Return -1 cap check")
    return -1;
  }
}