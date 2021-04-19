function range (start, end, step) {
  let output = []; //store final array of nuber


  for (let a = start; a <= end; a += step) {
    if (start === undefined || end === undefined || step === undefined) {
      return output;
    }
    else if (start >= end) {
      return output;
    }
    else if (step <= 0){
      return output;
    }
    else {
      output.push(a);

    }
    
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));