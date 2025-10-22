const cars = ["SUV", "Toyota", "Dacia"];

let string = "";

let unifiedCars = (cars) => {
   for (let i=0; i<cars.length; i++) {
        string += cars[i];
   }
   return string;
}

console.log(unifiedCars(cars));
