

function f(m , n){
   
    return (m == 0 || n == 0) ? 1 : f(m-1,n)+f(m,n-1)

}

console.log(f(2,0))