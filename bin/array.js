
//* =========================================================

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
    { name: "carrots", type: "vegetables", quantity: 10 },
    { name: "apples", type: "fruit", quantity: 15 },
    { name: "chicken", type: "meat", quantity: 18 },
    { name: "broccoli", type: "vegetables", quantity: 8 },
    { name: "potatoes", type: "vegetables", quantity: 12 },
    { name: "grapes", type: "fruit", quantity: 30 },
    { name: "beef", type: "meat", quantity: 25 },
    { name: "spinach", type: "vegetables", quantity: 7 },
    // Add more items as needed
];

// Example usage:
console.log(inventory);


  const vaccineTemplate =  [
    {
      template_id: 1,
      row_id: 1,
      group_id: '1',
      template_name: 'BCG',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '0',
      vaccine_max_day: '1',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: 'รับตอนเแรกเกิด',
      group_name_eng: 'BCG',
      group_name_th: 'บีซีจี',
      base_vaccine_type_id: '003',
      group_status: true
    },
    {
      template_id: 2,
      row_id: 2,
      group_id: '2',
      template_name: 'HBV',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '0',
      vaccine_max_day: '30',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'HBV',
      group_name_th: 'ไวรัสตับอักเสบบี',
      base_vaccine_type_id: '004',
      group_status: true
    },
    {
      template_id: 3,
      row_id: 13,
      group_id: '3',
      template_name: 'ROTA',
      dose: '3',
      vaccine_type: '1',
      vaccine_min_day: '42',
      vaccine_max_day: '240',
      gap_min_day: '60',
      gap_max_day: '65',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'ROTA',
      group_name_th: 'โรต้า',
      base_vaccine_type_id: '015',
      group_status: true
    },
    {
      template_id: 4,
      row_id: 4,
      group_id: '4',
      template_name: 'DTwP+HIB+OPV+HBV (6 โรค)',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '50',
      vaccine_max_day: '70',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTwP+HIB+OPV+HBV',
      group_name_th: 'คอตีบ-บาดทะยัก-ไอกรน-ฮิบ-โปลิโอ-ตับอักเสบบี (6โรค)',
      base_vaccine_type_id: '030',
      group_status: true
    },
    {
      template_id: 5,
      row_id: 9,
      group_id: '5',
      template_name: 'DTwP+HIB+OPV (5 โรค)',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '120',
      vaccine_max_day: '130',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTwP+HIB+OPV',
      group_name_th: 'คอตีบ-บาดทะยัก-ไอกรน-ฮิบ-โปลิโอ (5โรค)',
      base_vaccine_type_id: '029',
      group_status: true
    },
    {
      template_id: 6,
      row_id: 4,
      group_id: '4',
      template_name: 'DTwP+HIB+OPV+HBV (6 โรค)',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '180',
      vaccine_max_day: '190',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTwP+HIB+OPV+HBV',
      group_name_th: 'คอตีบ-บาดทะยัก-ไอกรน-ฮิบ-โปลิโอ-ตับอักเสบบี (6โรค)',
      base_vaccine_type_id: '030',
      group_status: true
    },
    {
      template_id: 7,
      row_id: 14,
      group_id: '6',
      template_name: 'Influ first 2 dose',
      dose: '2',
      vaccine_type: '1',
      vaccine_min_day: '180',
      vaccine_max_day: '3285',
      gap_min_day: '30',
      gap_max_day: '30',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'Influ',
      group_name_th: 'ไข้หวัดใหญ่',
      base_vaccine_type_id: '001',
      group_status: true
    },
    {
      template_id: 8,
      row_id: 14,
      group_id: '6',
      template_name: 'Influ yearly',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '180',
      vaccine_max_day: '3285',
      gap_min_day: '365',
      gap_max_day: '365',
      yearly: true,
      template_status: true,
      active_after_id: '7',
      template_description: null,
      group_name_eng: 'Influ',
      group_name_th: 'ไข้หวัดใหญ่',
      base_vaccine_type_id: '001',
      group_status: true
    },
    {
      template_id: 12,
      row_id: 16,
      group_id: '8',
      template_name: 'JE (Imojev)',
      dose: '2',
      vaccine_type: '1',
      vaccine_min_day: '270',
      vaccine_max_day: '720',
      gap_min_day: '360',
      gap_max_day: '720',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'Live JE',
      group_name_th: 'วัคซีนไข้สมองอักเสบเจอี (Imojev)',
      base_vaccine_type_id: '011',
      group_status: true
    },
    {
      template_id: 13,
      row_id: 17,
      group_id: '9',
      template_name: 'JE (CD JE)',
      dose: '2',
      vaccine_type: '1',
      vaccine_min_day: '270',
      vaccine_max_day: '360',
      gap_min_day: '90',
      gap_max_day: '90',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'JE',
      group_name_th: 'วัคซีนไข้สมองอักเสบเจอี (CD JE)',
      base_vaccine_type_id: '008',
      group_status: true
    },
    {
      template_id: 14,
      row_id: 18,
      group_id: '10',
      template_name: 'MMR 1',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '270',
      vaccine_max_day: '360',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'MMR',
      group_name_th: 'วัคซีนหัดเยอรมัน-คางทูม',
      base_vaccine_type_id: '007',
      group_status: true
    },
    {
      template_id: 15,
      row_id: 18,
      group_id: '10',
      template_name: 'MMR 2',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '540',
      vaccine_max_day: '540',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'MMR',
      group_name_th: 'วัคซีนหัดเยอรมัน-คางทูม',
      base_vaccine_type_id: '007',
      group_status: true
    },
    {
      template_id: 16,
      row_id: 15,
      group_id: '7',
      template_name: 'DTWP+IPV 1',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '540',
      vaccine_max_day: '540',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTWP+IPV',
      group_name_th: 'คอตีบ-บาดทะยัก-ไอกรน-โปลิโอ  (4 โรค)',
      base_vaccine_type_id: '026',
      group_status: true
    },
    {
      template_id: 17,
      row_id: 15,
      group_id: '7',
      template_name: 'DTWP+IPV 2',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '1460',
      vaccine_max_day: '2190',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTWP+IPV',
      group_name_th: 'คอตีบ-บาดทะยัก-ไอกรน-โปลิโอ  (4 โรค)',
      base_vaccine_type_id: '026',
      group_status: true
    },
    {
      template_id: 18,
      row_id: 19,
      group_id: '11',
      template_name: 'HPV',
      dose: '2',
      vaccine_type: '1',
      vaccine_min_day: '3285',
      vaccine_max_day: '3645',
      gap_min_day: '180',
      gap_max_day: '360',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'HPV',
      group_name_th: 'วัคซีนป้องกันมะเร็งปากมดลูกเอชพีวี',
      base_vaccine_type_id: '016',
      group_status: true
    },
    {
      template_id: 21,
      row_id: 14,
      group_id: '6',
      template_name: 'Influ yearly > 9 year',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '3285',
      vaccine_max_day: '4380',
      gap_min_day: '365',
      gap_max_day: '365',
      yearly: true,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'Influ',
      group_name_th: 'ไข้หวัดใหญ่',
      base_vaccine_type_id: '001',
      group_status: true
    },
    {
      template_id: 20,
      row_id: 20,
      group_id: '12',
      template_name: 'dTP',
      dose: '1',
      vaccine_type: '1',
      vaccine_min_day: '4015',
      vaccine_max_day: '4380',
      gap_min_day: '0',
      gap_max_day: '0',
      yearly: false,
      template_status: true,
      active_after_id: '0',
      template_description: null,
      group_name_eng: 'DTwP',
      group_name_th: 'วัคซีนคอตีบ บาดทะยัก ไอกรนชนิดทั้งเซลล(DTwP)',
      base_vaccine_type_id: '005',
      group_status: true
    }
  ]

  
  

  function groupBy(arr , callback){

        let result = []
        let obj = {}

        arr.map((item,i)=>{
            let condition = callback(item);
            let groupData = condition
        
            //error handler 

            // When condition is undefined
            if(!condition){
                 obj['error'] = `No attribute name ${obj[groupData]}`
                 return -1;
            }

                
            if( !obj[groupData] ){
                obj[groupData] = []
            }
            
            obj[groupData] = [...obj[groupData] ,item]
                
        })

        result.push(obj) 

        return result
  }

  let result = groupBy(inventory , ( { group_id } ) => group_id )
  result.map((item)=>{
    console.log(item)
  })
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


export function rand(min = 1, max = 10) {
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








