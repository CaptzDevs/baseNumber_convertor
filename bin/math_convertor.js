

    const radixToNumber = {
        'A': 10,'B': 11,'C': 12,'D': 13,'E': 14,'F': 15,'G': 16,'H': 17,'I': 18,
        'J': 19,'K': 20,'L': 21,'M': 22,'N': 23,'O': 24,'P': 25,'Q': 26,'R': 27,
        'S': 28,'T': 29,'U': 30,'V': 31,'W': 32,'X': 33,'Y': 34,'Z': 35,
    };

    const numberToRadix = {
        10 : 'A',11 : 'B',12 : 'C',13 : 'D',14 : 'E',15 : 'F',16 : 'G',17 : 'H',
        18 : 'I',19 : 'J',20 : 'K',21 : 'L',22 : 'M',23 : 'N',24 : 'O',25 : 'P',
        26 : 'Q',27 : 'R',28 : 'S',29 : 'T',30 : 'U',31 : 'V',32 : 'W',33 : 'X',
        34 : 'Y',35 : 'Z'
    };
    

    //* num : number [any base]
    //* base : base of ns [any base] || 10

    /* 
        * @param {string} num
        * @param {number} base
        * @return {number}
     */
    function toDec(num = "",base = 10){

        if(typeof num != 'string'){
            console.log(new Error("num should be a string"))
            return
        }
        if(typeof base != 'number'){
            console.log(new Error("base should be a num"))
            return

        }

        let p = num.length-1  
        let res = 0
        for(let i = 0 ; i < num.length;i++){
            c = num[i].toUpperCase()
            n = radixToNumber[c] ? radixToNumber[c]*(base**p) : (+c)*(base**p)
            res += n
            p -= 1

        }
        return res
    }

    
      /* 
        * @param {number} base
        * @return {number}
     */
    function randomBaseNumber(base) {
        const randomNumber = Math.floor(Math.random() * base);
        return randomNumber.toString(base);
    }

    /* 
        * @param {number} n
        * @param {number} base
        * @return {boolean}
     */
    function validateBase(n,base){
        const regex = /[a-zA-Z]/;
        let isCharaterInclude = regex.test(String(n))

        if(isCharaterInclude){
            n = String(n).toUpperCase().split('')
            return  n.every((item) => radixToNumber[item] ? (radixToNumber[item] < base) : item >= 0 )
        }
        else if(!isCharaterInclude){
            n = String(n).split('')
            return n.every((item) => item >= 0 && item < base)
        }

        return true
    }


    //* Short division but get only frac

      /* 
       * @param {number} n
       * @param {number} to
       * @return {string}
    */
    function divideN(n,to){

            let devide = n
            let frac = 0
            let resArr = []

            while(devide != 0){
                frac = devide%to
                devide = Math.floor(devide/to)

                resArr.unshift(numberToRadix[frac] ? numberToRadix[frac] : frac )
            }
            return resArr.join('')
    }


    //* Main convert function
    /* 
       * @param {number} n
       * @param {number} base
       * @param {number} to
       * @return {string}
    */
    function convertBase(n , base , to,){
        
        if(!validateBase(n,base)){
            console.error(`${n} is not ${base} base`)
            return 0
        }

        let ns = ''+n
        let res = 0;

        if(n == 0){
            res = 0
        }
        else if(base === to){
            res = n
        }
        else if(n === to && base === 10){
            res = 10
        }
        else if(to === 10){

            res = toDec(ns,base)

        }else if(base > to && base === 10){

            res = divideN(n,to) 

        }else if(base >= 10 && to > 10){

            let nDec = toDec(ns,base)
            let divided = divideN(nDec,to)
            res = divided

        } else {

            let nDec = toDec(ns,base)
            res = divideN(nDec,to)
        }
    
        return res
    }

    //* remove Trailing Zero  
   /* 
       * @param {string , array} numbers
    */

    function removeTrailingZero(numbers = '') {
        let resArr = [];
        let withDec = false
    
        if (!(numbers instanceof Array)) {
            numbers = String(numbers);
            if (numbers.includes(".")) {
                let numsplit = numbers.split(".");
                withDec = true
                resArr = [...numsplit[1]];
            }else{
                resArr = [...numbers];
            }
        }
    
        if (numbers instanceof Array) {
            resArr = numbers;
        }
    
        if (resArr instanceof Array) {
            let foundOne = false;
    
            for (let i = resArr.length - 1; i >= 0; i--) {
                if (resArr[i] == 1) {
                    foundOne = true;
                }
                if (i == 0 && resArr[i] == 0 && !foundOne) {
                    resArr.push(0);
                }
    
                if (resArr[i] == 0 && !foundOne) {
                    resArr.pop();
                }
            }
        }
        return withDec ? numbers.split(".")[0]+"."+resArr.join("") : resArr.join("");
    }
    

/* ------------------------------------------------------------------  */


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

    const MathConvertor = {
        isMorseCode : function(str)  {
            const morseCodePattern = /^[.-_-.\s/]+$/;
            return morseCodePattern.test(str);
        }
    }
    

    


