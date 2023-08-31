

//* =========================================================

function inRange(start = 0,end,step = 1,fn){
    step = Number(step)
    
    let i = start
    let arr = []
    if(step >= end || step == 0) step = 1;

    while(i < end){
        if(typeof fn === 'function'){
            fn(i)
        }

        arr.push(i)
        i += step

    }
    return arr
}

//* =========================================================


function rand(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//* =========================================================

function difference(arr,n2){
    if(arr instanceof Array){
        let diffArr = []
        for (let i = 0 ; i < arr.length; i++){
            let item = arr[i]
            if(i > 0){
                diffArr.push(Math.abs(item-arr[i-1]))
            }
        }
        console.log(diffArr)
    }else if(typeof arr === 'number' && n2){
        console.log( Math.abs(arr - n2))
    }
} 

//* =========================================================

function randArray(length, min, max) {
    const randomArray = [];
    
    for (let i = 0; i < length; i++) {
      const randomValue = rand(min,max);
      randomArray.push(randomValue);
    }
    
    return randomArray;
  }

//* =========================================================

//* SORT

    function sortASC(a,b){
            return a - b
    }
    function sortDESC(a,b){
        return b-a
    }

    let arrSort = randArray(rand(5,6),1,20)

    console.log("Original",arrSort)
    console.log("Sort ASC",arrSort.sort(sortASC))
    console.log("Sort DESC",arrSort.sort(sortDESC))

    console.log("---")

//* =========================================================


let rangSet = [
    {
        min : 0,
        max : 39,
        output : "E",
    },
    {
        min : 40,
        max : 50,
        output : "D",
    },
    {
        min : 50,
        max : 59,
        output : "C",
    },
    {
        min : 60,
        max : 79,
        output : "B",
    },
    {
        min : 80,
        max : 100,
        output : "A",
    },
   
]

/** 
    * @param {(number || number[])} arrN
    * @return {(number || number[])}
*/


function grade(n){
    let res
    if(typeof n === "number"){

        rangSet.map((item)=>{
            if(n <= item.max && n >= item.min){
            res = item.output
            }
        })
    }

    if( n instanceof Array ){
        let resultArray = []

        n.map((score,i)=>{
            let outofrang = true
            rangSet.map((item)=>{
            let resultObject = {}
                if(score <= item.max && score >= item.min){
                    resultObject = {
                        i : i,
                        score : score,
                        grade : item.output,

                    }
                     resultArray.push(resultObject)
                     outofrang = false
                }
            })

            if(outofrang){
                console.error(`${score} is not include in range`)
            }
        })

        res = resultArray;
    }

    return res
}

/** 
    * @param { number[] } arrN
    * @return { number }
*/


function sum(arrN = []){
     return arrN.reduce((prev,curr)=> prev += curr)
}

//* =========================================================

/** 
    * @param { number[] } arrN
    * @return { number }
*/

function avg(arrN = []){
    return (sum(arrN)/arrN.length)    //toFixed() method returns a string with a specified number of digits after the
}

//* =========================================================

/** 
    * @param { number[] } arrN
    * @return { number[] }
    * @input [ 1, 2, 3, 4, 5, 8 ]
    * @output [ 6, 7 ]
    * 
*/

function missingNumber(arrN = [] ){
    let prev;
    let missingNumberArr = []
    arrN = arrN.sort((a, b) => a - b);

    for (let i = 0 ; i < arrN.length ; i++){
        let item = arrN[i]
        if(i == 0){
            prev = item
        }else{

            prev = arrN[i-1]
        }

        if(item - prev > 1 ){
           /*  console.log("Missing number : ",prev+1); */
            arrN.splice(i,0,prev+1)
            missingNumberArr.push(prev+1)
            i = i-1
        }
    }
    return missingNumberArr
}

function missingRangeNumber(nums = [] ){
    let prev;
    let missingNumberArr = []
    let max= nums.length
    nums = nums.sort((a, b) => a - b);

    
    for (let i = 0 ; i < nums.length ; i++){
        let item = nums[i]
        if(i == 0){
            prev = item
        }else{

            prev = nums[i-1]
        }
     
        if(!nums.includes(0)){
            missingNumberArr.push(0)
        }
        if(item - prev > 1 ){
           /*  console.log("Missing number : ",prev+1); */
            nums.splice(i,0,prev+1)
            missingNumberArr.push(prev+1)
            i = i-1
        }
        else if(!nums.includes(max)){
            missingNumberArr.push(max)

        }
     
    }
    return [...new Set(missingNumberArr)]
}

//* =========================================================

/** 
    * @param { number[] } arrN
    * @return { number[] }
    *
    * @input [ 1, 2, 3, 4, 5, 8 ]
    * @output [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

function fillArr(arrN = []){
    let prev;
    for (let i = 0 ; i < arrN.length ; i++){
        let item = arrN[i]
        if(i == 0){
            prev = item
        }else{
            prev = arrN[i-1]
        }

        if(item - prev > 1 ){

            arrN.splice(i,0,prev+1)
            i = i-1
        }
    }
    return arrN
}

/* console.log(missingNumber([1,2,3,5]))
console.log(missingRangeNumber([1,2,3,5]))

console.log("------------") */


//* Generate Array

let arr = inRange(1,15,1)

//*-------------------------------------------------------------------------
//* test
/* 
let i = 0

let arrInt = []

while(i <= 10){
    let randN = rand(1,100)
    arrInt.push(randN)
    i++;
}

arrInt.forEach((item)=>{
    console.log(item , grade(item))
    console.log("-------------")

}) */







/* list.print()

list.print() */








