/* The marketing team wants the car models listed alphabetically on the website. 
 Execute a function to Sort all the car model names into alphabetical order and
 log the results in the console as it was returned.     */

const inventory = require('./inventory');

function sortByModel(){
    const size = inventory.length ; 
    for(let i=0; i<size-1; i++)
    {
        for(let j=0; j<size-i-1; j++)
        {
            if(inventory[j].car_model > inventory[j+1].car_model)
            {
                const temp = inventory[j];
                inventory[j] = inventory [j+1];
                inventory[j+1] = temp;
            }
        }
    }
    return inventory;
}

module.exports = sortByModel;