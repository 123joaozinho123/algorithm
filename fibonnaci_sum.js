function fiboEvenSum(n) {
    let n0 = 1;
    let n1 = 2;
    let sum = 0;
    while (n0 <= n){
      if (n0 % 2 == 0)
        sum += n0
      let next = n0 + n1;
      n0 = n1;
      n1 = next;
    }
    return (sum)
  }

//console.log(fiboEvenSum(8))
//console.log(fiboEvenSum(10))
//console.log(fiboEvenSum(34))
//console.log(fiboEvenSum(60))
//console.log(fiboEvenSum(1000))
//console.log(fiboEvenSum(100000))
//console.log(fiboEvenSum(4000000))