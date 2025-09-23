function accum(input) {
	let result = '';
  
  
  
  for(let i = 0; i < input.length; i++) {
    
    const CurrentLetter = input[i];
    
    
    for(let k = 0; k < i + 1; k++) {
      
      if(k == 0) {
        result+= CurrentLetter.toUpperCase();
        }
      else {
         result+= CurrentLetter.toLowerCase();
      }
        
      }
     
  if(i != input.length -1) {
    result += '-'
  }
  
  }
      
      
return result;
  }
