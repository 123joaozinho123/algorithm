function multiplesOf3Or5(number) {

    let count = 0;
    for (let i = 1; i < number; i++) {
      if ((i%5 == 0) || (i%3 == 0)){
        count+=i
      }
    }
    return (count)
  }
  
  console.log(multiplesOf3Or5(49))
  console.log(multiplesOf3Or5(1000))
  console.log(multiplesOf3Or5(8456))
  console.log(multiplesOf3Or5(19564))