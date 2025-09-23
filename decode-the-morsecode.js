decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word => word.split(' ').map(code => (MORSE_CODE[code] || '')).join('')).join(' ').trim();
}
decodeMorse = function(morseCode){
  return morseCode.split('   ').map(codedWord => {
    return codedWord.split(' ').reduce((word, code) => {
      return word + (MORSE_CODE[code] || '');
    }, ''); 
  }).join(' ').trim(); 
}
decodeMorse = function(morseCode){
 
return morseCode.split('   ').reduce((sentence, codedWord, index, codeWordArray) => {
return sentence + codedWord.split(' ').reduce((word, code) => {
      
return word + (MORSE_CODE[code] || '');
    }, '') + (index < codeWordArray.length - 1 ? ' ' : '');
  }, '').trim();
}