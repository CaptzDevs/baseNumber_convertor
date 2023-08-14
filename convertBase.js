
let error = document.getElementById('error_log')
let result = document.getElementById('result')

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
  
  //* ns : number [any base]
  //* base : base of ns [any base] || 10

  function toDec(numstring,base = 10){
    if (numstring && typeof numstring !== "string") {
        throw new Error("numstring should be a string");
    }
    if (base && typeof base !== 'number') {
        throw new Error("base should be a number");
    }

    
    if (numstring.includes('.')) {
        let numsplit = numstring.split('.');
        let n = toDec(numsplit[0], base);
        let dec = toDec(numsplit[1], base) / (base ** numsplit[1].length);
        return n + dec;
    }
    
    let p = numstring.length-1  
    let res = 0
    for(let i = 0 ; i < numstring.length;i++){
        c = numstring[i].toUpperCase()
        n = radixToNumber[c] ? radixToNumber[c]*(base**p) : (+c)*(base**p)
        res += n
        p -= 1
    }
    return res
}


function getRandomBaseNumber(base) {
    const randomNumber = Math.floor(Math.random() * base);
    return randomNumber.toString(base);
  }
  
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

/* console.log(toDec("5F",16)) */

/* --------------------------------------------------- */  
//* Short Divide get only frac 
function divideN(n, base, to) {

    console.log(n,base,to)
    let devide = n;
    let frac = 0;
    let resArr = [];
    let numstring = String(n);
  
    if (numstring.includes(".")) {
      let numsplit = numstring.split(".");
      let n = divideN(numsplit[0], base, to);
      let dec = getFrac(numsplit[1], base, to);
  
      return n + "." + dec;
    }
  
    while (devide != 0) {
      frac = devide % to;
      devide = Math.floor(devide / to);
  
      resArr.unshift(numberToRadix[frac] ? numberToRadix[frac] : frac);
    }
  
    return resArr.join("");
  }
  
  function getFrac(n, base, to) {
    let devide = n / 10 ** String(n).length;
    let result = 0;
    let frac = 0;
    let resArr = [];
    let count = 1;
  
    while (devide < 1 && count <= 30) {
      result = devide * to;
      frac = Math.floor(result);
      devide = +(result - Math.floor(result)).toFixed(2);

      resArr.push(numberToRadix[frac] ? numberToRadix[frac] : frac);
  
  
      count++;
    }
  
    //remove trailing zero
    return removeTrailingZero(resArr);
  
  }
  
  //hand write
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
  
/* --------------------------------------------------- */  

//* Handle about showing result to element
function showConvertbase(n , base , to){
    // Validate Value 
    
  /*   if(!validateBase(n,base)){
        result.innerHTML = `${n} is not ${base} base`
        result.classList.add("error-base")
        return 0

    }else{
        result.classList.remove("error-base")
    }
     */
    res = convertBase(n,base,to)

    result.innerHTML = `<span>${String(n).toUpperCase()}<sub>${base}</sub> = ${res}<sub>${to}</sub></span>`
 
    return res
}

//* Main convert function
function convertBase(n , base , to,){
    
/*     if(!validateBase(n,base)){
        console.error(`${n} is not ${base} base`)
        return 0
    } */

    let ns = ''+Math.abs(n)
    let res = 0;
    if(n == 0){
        res = 0
    }
    else if(base === to){
        res = Math.abs(n)
        console.log('das6')

    }
    else if(n === to && base === 10){
        res = 10
        console.log('das5')

    }
    else if(to === 10){
        res = toDec(ns,base)
        console.log('das4')

    }else if(base > to && base === 10){

        res = divideN(n,base,to) 
        console.log(res)
        console.log('das1')

    }else if(base >= 10 && to > 10){

        let nDec = toDec(ns,base)
        console.log(nDec)
        let divided = divideN(nDec,base,to)
        res = divided
        console.log('das2')

    } else {

        let nDec = toDec(ns,base)
        res = divideN(nDec,base,to)
        console.log('das3')
    }

    if(n < 0){
        res = '-'+res
    }
 
    return res
}

function showResult(){
    let n = document.getElementById('num').value
    let base =  +document.getElementById('base').value
    let to = +document.getElementById('to').value
    
    showConvertbase(n,base,to)

    return {n:n,base:base,to:to}
}

//* init evnet
   function initEvent(){
    let numInput = document.getElementById('num')
    numInput.dataset.dec = numInput.value

let btn = document.getElementById('cal')
let selectionBase =  document.getElementById('base')
let selectionTo = document.getElementById('to')



numInput.addEventListener('input',(e)=>{
    let base =  +document.getElementById('base').value
    e.target.dataset.dec = toDec(e.target.value,base)
    showResult()

})

selectionBase.addEventListener('input',(e)=>{
    showResult()
})
selectionTo.addEventListener('input',(e)=>{
    showResult()
})

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    showResult()
})
   }

    function increaseValueByMouse(){

        let base
        
        let isHoldingMouse = false
        let checkMouseStartsX = 0
        let checkMouseStartsY = 0
        let elem = null
    
        document.querySelectorAll('input[type=number],input[type=text]').forEach((item)=>{
            item.addEventListener('mousedown',(e)=>{
                isHoldingMouse = true
                checkMouseStartsX = e.clientX
                checkMouseStartsY = e.clientY
                elem = e.target
                base =  +document.getElementById('base').value
        })

        item.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowUp') {
                elem.dataset.dec = +elem.dataset.dec+1 
                elem.value = convertBase(+elem.dataset.dec ,10,base)
                showResult()
            }
            if(e.key === 'ArrowDown'){
                elem.dataset.dec = +elem.dataset.dec-1 
                if(+elem.dataset.dec < 0){
                    elem.dataset.dec = 0
                }
                
                elem.value = convertBase(+elem.dataset.dec,10,base)
                showResult()
            }
         
        })
  
        window.addEventListener('mousemove',(e)=>{
            if(isHoldingMouse){
                elem.dataset.dec = (e.clientX-checkMouseStartsX)-(e.clientY - checkMouseStartsY)

                if(+elem.dataset.dec < 0){
                    elem.dataset.dec = 0
                }
                
                elem.value = convertBase(+elem.dataset.dec ,10,base)
                showResult()

            }
        })

        window.addEventListener('mouseup',(e)=>{
            isHoldingMouse = false
        })

    })



}

increaseValueByMouse()
initEvent()



/* let n = 0
setInterval(() =>{ 

    document.getElementById('result').innerHTML =  `${convertBase(n,10,2)} | ${n}`
    n += 1;

},500) */
