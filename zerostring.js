
function longestZeroString (intValue){

  let highZeroCount = 0;
  let zeroCount = 0; 
  let startAtOneCount = false;
  const intToBin = intValue.toString(2);
  console.log("Binary Number ", intToBin);

  intToBin.split('').forEach((oneCheck, index, stringArray) => {
    if (oneCheck === "1" && !startAtOneCount){
      startAtOneCount = true;
    } else if (oneCheck === "1" && oneCheck && stringArray[index-1] === "0") {
      if (zeroCount > highZeroCount){
        highZeroCount = zeroCount;
      }
      zeroCount = 0; 
      if (stringArray[index+1 === "1"]){
        startAtOneCount = false;
      } 
    }
    if (startAtOneCount && oneCheck === "0") {
      zeroCount++;
    }
  });
  return highZeroCount;
}
