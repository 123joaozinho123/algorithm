

function largestPrimeFactor(number) {
    let p = 2;
    while (p * p <= number) {
        if (number % p == 0)
            number = number / p;
        else
            p++;
    }
    return (number);
  }

console.log(largestPrimeFactor(2))
console.log(largestPrimeFactor(3))
console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(8))
console.log(largestPrimeFactor(13195))
console.log(largestPrimeFactor(600851475143))