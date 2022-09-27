
/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/
var callErathostenes=function(){
    var input=document.getElementById("num").value
    document.getElementById("result").innerHTML=eratosthenes(input).toString()
  
  }
  
  
  var eratosthenes = function(n) {
    var arreglo = []
    var limite = Math.sqrt(n)
    criba = [2];
  
    for (var i = 0; i < n; i++)
        arreglo.push(1);
  
    for (var i = 3; i <= limite; i += 2) {
        if (arreglo[i]) {
            for (var j = i * i; j < n; j += i*2)
                arreglo[j] = 0;
        }
    }
  
    for (var i = 3; i < n; i += 2) {
        if(arreglo[i]) {
            criba.push(i);
        }
    }
    return criba;
  };
  
  console.log(eratosthenes(100))