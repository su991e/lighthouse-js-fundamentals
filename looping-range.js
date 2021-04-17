let range = function (start, end, step) {
  let output = []; //store final array of nuber


  for (let a = start; a <= end; a += step) {
    output.push(a);
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));