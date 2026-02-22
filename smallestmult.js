function gcd(a, b) {
    if (a === 0)
        return b;
    return gcd(b % a, a);
}

function lcm(a,b){
    return(a*b/gcd(a,b));
}

function smallestMult(n) {
    let mult = 1;
    for (let i=2; i <= n; i++)
        mult = lcm(mult, i);
    return(mult);
  }
  
console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(13));
console.log(smallestMult(20));