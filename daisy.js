
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

let carPassing = function (cars, speed) {

  cars.push ({ time: Date.now(), speed });
  return cars;

}



const speed = 38

carPassing(cars, speed)