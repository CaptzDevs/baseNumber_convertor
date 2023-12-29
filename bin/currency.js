
import { rand } from './array.js'
const k =  10**3
const m =  10**6
const b =  10**9
const t =  10**12

/* 
    * toShort   Tested [passed] 
    * floorAt   Tested [passed] 
    * ceilAt    Tested [passed] 
    * roundAt   Tested [passed] 
*/


/** 
*   @param  {number} n
*   @param  {number} dp decimalPlace
*/

function toShort(n, dp = 2){

    const suffixes = ["", "k", "M", "B", "T"];

    const indexSuffix = Math.floor(Math.log10(n) / 3);

    if(String(n).length <= 3){
        return String(n)
    }

    let dec , fac, dfac ,result
    let pow = 1000**indexSuffix
    let suffix = suffixes[indexSuffix]

    dec = Math.floor((n/pow))
    fac = n%pow
    dfac  = fac/pow
    result = String(dec+dfac).slice(0,String(dec).length+(dp > 0 ? dp+1 : 0))

    if(fac < 10 ){
        return `${dec}${suffix}`
    }else{
        return `${result}${suffix}`
    }
}


/** 
*   @param  {number} n
*   @param  {number} index
*/

function floorAt(n = 0,index = 1){
    let result = +(String(n).slice(0,index))
    if(index < String(n).length){
        result += "0";
    }

    let i = 1
    while( i < String(n).length-index){
        result += '0'
        i++
    }
     return +result
}

/** 
*   @param  {number} n
*   @param  {number} index
*/

function ceilAt(n = 0,index = 1){

    let result = +String(n).slice(0,index)+1
    if(index < String(n).length){
        result += "0";
    }

    let i = 1
    while( i < String(n).length-index){
        result += '0'
        i++
    }
     return +result
}


/** 
*   @param  {number} n
*   @param  {number} index
*/


function roundAt(n = 0,index = 1){
    if(String(n)[index] >= 5){
        return ceilAt(n,index)
    }else{
        return floorAt(n,index)
    }
}


//*-------------------------------------------------------------------------
//* test


let i = 0

let arr = []

while(i <= 10){
    let randN = rand(10*k,100*k)
    arr.push(randN)

    i++;
}

arr.forEach((item)=>{
    console.log(toShort(floorAt(item,3)),item)
    console.log(toShort(item),item)
    console.log("-------------")

})



