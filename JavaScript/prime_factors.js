/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/
var callPrimes=function(){
  var input=document.getElementById("num").value
  document.getElementById("result").innerHTML=getPrimeFactors(input).toString()

}

var getPrimeFactors = function (n) {
    "use strict";
        
    function isPrime(n) {
        var i;
        
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i, sequence = [];

  for (i = 2; i <= n; i++) {
    if (n % i !== 0) continue;
    for (var j = 2; j <= i / 2; j++) {
      isPrime = i % j !== 0;
    }
    if (!isPrime) continue;
    n /= i
    sequence.push(i);
  }

    return sequence;
};
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]

console.log(getPrimeFactors(30030));
