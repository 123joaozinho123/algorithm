function ispalindrome(number){
    let n = number.toString();
    let rev = n.split('').reverse().join('');
    rev = Number(rev);
    if (number == rev)
        return (1);
    else
        return (0);
}

function largestPalindromeProduct(n) {
    let max = 0;
    for (let i = 10**(n-1); i <= (10**n - 1); i++){
        for (let j = 10**(n-1); j <= (10**n - 1); j++){
            let prod = j * i;
            if (ispalindrome(prod) == 1){
                if (prod > max)
                    max = prod;
            }
        }
    }
    return (max)
  }
console.log(largestPalindromeProduct(1))
console.log(largestPalindromeProduct(2))
console.log(largestPalindromeProduct(3))
// 9009 = 91 × 99.