
//Place should have at least 20 capacity
//Stations should be schools or community stations

const stations = [
  ["Jack's Pizza House", 15, "restaurant"],
  ["Toronto Secondary School", 35, "school"],
  ["Ontario Community Centre", 50, "community centre"],
  ["National Secondary School", 17, "school"],
  ["Global Community Centre", 20, "community centre"]
];


const chooseStations = function(stations) {
  const goodStations = []; // store qualified places for stations

//for loop to go through all array of places
  for (const station of stations) {
    const capacity =  station[1]; //number of capacity

    //check if places have capacity of at least 20
    if (capacity >= 20) {
      const type = station [2];

      //check if place is either school or community centre
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]); //push qualified places to array
      }
    }
  }
  return goodStations; // let qualified stations output to outside of function
}
  

console.log (chooseStations(stations));