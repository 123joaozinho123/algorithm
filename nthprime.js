
function isPrime(n) {
    let i = 2;
    for (let i = 2; i * i <= n;i++){
        if (n % i == 0)
            return 0;
    }
    return 1;
}

function nthPrime(n){
    let count = 0;
    let number = 1;
    while (count < n){
        number++;
        if (isPrime(number) == 1)
            count++;
    }
    return (number);
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));