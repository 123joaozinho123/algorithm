function sumSquareDifference(n) {
    let sum = 0;
    let ssum = 0;
    for (let i=1; i <=n; i++)
      sum += i;
    for (let i=1; i <=n; i++)
      ssum += i**2;
    return (sum**2 -ssum);
}
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));