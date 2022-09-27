
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var callFibonacci=function(){
    var input=document.getElementById("num").value
    document.getElementById("fibonacciLbl").innerHTML=fibonacci(input).toString()
  
  }


var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    return f;
}

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        //TODO: Implement the fibonacci function here!
        memo[0]=0;
        memo[1]=1;
        for(let i=2; i<=n; i++){
        memo[i]=memo[i-1]+memo[i-2]
       
        }
        value = memo[n]
    }

  return value
}
    
console.log(f(13));