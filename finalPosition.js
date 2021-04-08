
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']; //grid of best angle

const finalPosition = function (moves) {
  let bestAngle = []; //store best angle
  let xgrid = 0;
  let ygrid = 0;

  for (let a = 0; a < moves.length; a++) {
    if (moves[a] === 'east')  {
      xgrid += 1;
    }
    else if (moves[a] === 'west') {
      xgrid -= 1;
    }
   
    else if (moves[a] === 'north') {
      ygrid += 1;
        
    }
    else if (moves[a] === 'south') {
      ygrid -= 1;
    }
    
  }
  bestAngle.push (xgrid, ygrid);
  return bestAngle;

}

console.log (finalPosition(moves));