const radixToNumber = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

const numberToRadix = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
  16: "G",
  17: "H",
  18: "I",
  19: "J",
  20: "K",
  21: "L",
  22: "M",
  23: "N",
  24: "O",
  25: "P",
  26: "Q",
  27: "R",
  28: "S",
  29: "T",
  30: "U",
  31: "V",
  32: "W",
  33: "X",
  34: "Y",
  35: "Z",
};

function divideN(n, base, to) {
  let devide = n;
  let frac = 0;
  let resArr = [];
  let numstring = String(n);

  if (numstring.includes(".")) {
    let numsplit = numstring.split(".");
    let n = divideN(numsplit[0], to, base);
    let dec = getFrac(numsplit[1], to, base);

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
  let resArrRemoveZero = [];
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



function toDec(numstring,base = 10){
    if (numstring && typeof numstring !== "string") {
        throw new Error("numstring should be a string");
    }
    if (base && typeof base !== 'number') {
        throw new Error("base should be a number");
    }

    
    if (base <= 10 && numstring.includes('.')) {
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
let num = 1.5;



