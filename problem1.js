// /* The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer 
// find out which car has an id of 33 by calling a function that will return the data for that car.
// Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"   */


const inventory = require("./inventory");

function findCarById(id) {
    for(let i=0; i<inventory.length; i++)
    {
        if(inventory[i].id === id)
        {
            return inventory[i];
        }   
    }
    return "not found";
}

module.exports = findCarById;


// const inventory = require('./inventory');

// function Problem1(){
//     let i;
//     for(i=0;i<inventory.length;i++){
//         if (inventory[i].id==33){
//             const { car_year: year, car_make: make, car_model: model,id:id } = inventory[i];
//             //return `CAR 33 is a ${year} ${make} ${model}`;
//             return inventory[i];
//         }
//     }
//     return "CAR 33 is not found";
// }
// module.exports = Problem1;