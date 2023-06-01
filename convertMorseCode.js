
const characterToMorseCode = {
    "A": ".-", "B": "-...", "C": "-.-.",  "D": "-..", "E": ".", "F": "..-.", "G": "--.",
    "H": "....","I": "..","J": ".---","K": "-.-","L": ".-..","M": "--","N": "-.","O": "---",
    "P": ".--.","Q": "--.-","R": ".-.","S": "...","T": "-","U": "..-","V": "...-","W": ".--","X": "-..-","Y": "-.--","Z": "--..",
    "0": "-----","1": ".----","2": "..---","3": "...--","4": "....-","5": ".....","6": "-....","7": "--...","8": "---..","9": "----.",
    ".": ".-.-.-",",": "--..--","?": "..--..","'": ".----.","!": "-.-.--","/": "-..-.","(": "-.--.",")": "-.--.-","&": ".-...",":": "---...",
    ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", '"': ".-..-.", "$": "...-..-", "@": ".--.-.","_":" "
  };

  const morseCodeToCharacter = {
    ".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G","....": "H","..": "I",
    ".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",".--.": "P","--.-": "Q",".-.": "R","...": "S",
    "-": "T","..-": "U","...-": "V",".--": "W","-..-": "X","-.--": "Y","--..": "Z","-----": "0",".----": "1",
    "..---": "2","...--": "3","....-": "4",".....": "5","-....": "6","--...": "7","---..": "8","----.": "9",".-.-.-": ".",
    "--..--": ",","..--..": "?",".----.": "'","-.-.--": "!","-..-.": "/","-.--.": "(","-.--.-": ")",".-...": "&","---...": ":",
    "-.-.-.": ";","-...-": "=",".-.-.": "+","-....-": "-","..--.-": "_",".-..-.": '"',"...-..-": "$",".--.-.": "@"
  };
  
  function isMorseCode(str) {
    const morseCodePattern = /^[.-_-.\s/]+$/;
    return morseCodePattern.test(str);
  }

function morseCodeToText(s){
    let morses = ''
    
    // * morse code to en
        let mcArr = s.split(' ')
        for (let i = 0 ; i < mcArr.length; i++){
            let c = mcArr[i]
            morses += morseCodeToCharacter[c] ? morseCodeToCharacter[c] : " "
        }
        return morses
}
function toMorseCode(s){
    
    let morses = ''
    
    // * en to morse code
    s = s.toUpperCase()
        for (let i = 0 ; i < s.length; i++){
            let c = s[i]
            morses += characterToMorseCode[c] ? characterToMorseCode[c] : '_'
            morses += " "
        }
        

    return morses

}

let textInput = document.getElementById('text')
let morseCodeInput = document.getElementById('morsecode')
let type = document.getElementById('type')

    let result = document.getElementById("result")

    textInput.addEventListener("input",(e)=>{
        result.innerHTML = toMorseCode(e.target.value)
        type.innerHTML = 'Morse Code'
    })

    morseCodeInput.addEventListener("input",(e)=>{
        result.innerHTML = morseCodeToText(e.target.value)
        type.innerHTML = 'Text'

    })

