function indexPrime(param1){
  function findPrime(n){
  if (n===1 || n===0){
    return false
  }
  var primeNum = true
  for(x=2; x<n; x++){
    if (n %x === 0){
      primeNum = false
    }
  }
  return primeNum
  }