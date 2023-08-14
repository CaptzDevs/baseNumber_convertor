

let A = inRange(3,5+1);
let B = inRange(3,10+1);

// const formular = x*y <= 8

function cal(x,y) {
    return 7*x+y
}

function combineWith(A,B,method){
    let header = '<th> '
    let body  = ''
    let row = ''

    for (let j = 0 ; j < B.length; j++){
        header += `<th> ${B[j]} </th>`
    }

    for (let i = 0 ; i < A.length; i++){
         row =  `<td>${A[i]} </td> `;

        for (let j = 0 ; j < B.length; j++){
            row += `<td> ${cal(A[i], B[j])} </td>`
        }

        body += `<tr>${row}</tr>`
    }


        let tableHeader = document.querySelector("thead")
        let tableBody = document.querySelector("tbody")

        tableHeader.innerHTML = ''
        tableBody.innerHTML = ''

        tableHeader.insertAdjacentHTML("afterbegin",header)
        tableBody.insertAdjacentHTML("afterbegin",body)

        hlTable('th')
        hlTable('td')

    /* return [header,body] */
}

/* let [header , body] = combineWith(A,B);

let tableHeader = document.querySelector("thead")
let tableBody = document.querySelector("tbody")

tableHeader.insertAdjacentHTML("afterbegin",header)
tableBody.insertAdjacentHTML("afterbegin",body) */
function hlTable(tag){

    let td = document.querySelectorAll(tag)

    let isHL = false;
    
    td.forEach((item,i)=>{
        item.addEventListener('mousedown',(e)=>{
        isHL = true
    })

    item.addEventListener("mousemove",(e)=>{
        if(isHL){
            if(e.target.classList.length == 0){
                e.target.classList.add("hl")
                e.target.dataset.hl = 'true'
            }
        }
    })

    window.addEventListener('mouseup',(e)=>{
       if(isHL){
        let newtd = document.querySelectorAll(tag)

       }

        isHL = false

    })

    item.addEventListener("click",(e)=>{
        e.target.classList.add("hl")
     

    })
})

}

hlTable()
function increaseValueByMouse(){

    let startA = document.querySelector("#startA")
    let startB = document.querySelector("#startB")
    let endA = document.querySelector("#endA")
    let endB = document.querySelector("#endB")

    let stepA = document.querySelector("#stepA")
    let stepB = document.querySelector("#stepB")

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
    })
    


    item.addEventListener('keydown',(e)=>{
        if(e.key === 'ArrowUp') {
            elem.value = +elem.value+1 
        }

        if(e.key === 'ArrowDown'){
            elem.value = +elem.value-1 
            if(+elem.value < 0){
                elem.value = 0
            }
        }
    })

    item.addEventListener("keyup",(e)=>{
        stepA.value =  stepA.value <= 0 ? 1 : stepA.value
        stepB.value =  stepB.value <= 0 ? 1 : stepB.value

        A = inRange(+startA.value,+endA.value+1 ,+stepA.value);
        B = inRange(+startB.value,+endB.value+1 ,+stepB.value);
        combineWith(A,B)

    })

    window.addEventListener('mousemove',(e)=>{
        if(isHoldingMouse){
            elem.value = (e.clientX-checkMouseStartsX)-(e.clientY - checkMouseStartsY)
         
            stepA.value =  stepA.value <= 0 ? 1 : stepA.value
            stepB.value =  stepB.value <= 0 ? 1 : stepB.value

            A = inRange(+startA.value,+endA.value+1 ,+stepA.value);
            B = inRange(+startB.value,+endB.value+1 ,+stepB.value);

            console.log(+startA.value,+endA.value+1 ,+stepA.value)
            console.log(+startB.value,+endB.value+1 ,+stepB.value);
            console.log('----')

            combineWith(A,B)

            //disable nagative number
            if(+elem.value < 0 && (elem.id == 'stepA' || elem.id == 'stepB')){
                elem.value = 0
            }
        }
    })

    window.addEventListener('mouseup',(e)=>{
        isHoldingMouse = false
    })

    window.addEventListener("keydown",(e)=>{
        if(e.key = 'r'){
             document.querySelectorAll("td").forEach((item)=>{
            item.classList.remove('hl')
           })
           document.querySelectorAll("th").forEach((item)=>{
            item.classList.remove('hl')
           })
        }
    })

})



}

increaseValueByMouse()

