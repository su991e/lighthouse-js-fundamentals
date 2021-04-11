//case 1
let num = [];
let numb = [];
let concat = function (num, numb) {
  let numbs = num.concat (numb);
  return numbs;

}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


//case 2
let num2 = [];
let numb2 = [];
let concat2 = function (num2, numb2) {
  
  for (b=0; b < numb2.length; b++) {
    num2.push (numb2[b]);
  }
  return num2;

}

console.log(concat2([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat2([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat2([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat2([ 5, 10 ], []), "=?", [ 5, 10 ]);