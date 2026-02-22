function isprime(n){
    for(let i = 2; i * i <= n; i++){
        if (n % i == 0)
            return 0;
    }
    return (1)
}


function primeSummation(n) {
    let sum = 0;
    for(let i = 2; i < n; i++){
        if (isprime(i))
            sum += i;
    }
    return sum;
  }

console.log(primeSummation(17));
console.log(primeSummation(2001));
console.log(primeSummation(140759));
console.log(primeSummation(2000000));