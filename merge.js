let num = [];
let numb = [];

let merge = function (num, numb) {
  for (let a = 0; a < numb.length; a++) {
    num.push (numb[a]);
    
  }
  num.sort();
  return num;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);