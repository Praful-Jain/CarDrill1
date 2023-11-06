/* The car lot manager needs to find out how many cars are older than the year 2000. 
Using the array you just obtained from the previous problem,
find out how many cars were made before the year 2000 and return the array of older cars and log its length.*/

const getYears = require('./problem4');

function carsBuildBeforeTwoK(){
    const yearArr = getYears();
    var olderCars=[];
    for(let i=0; i<yearArr.length; i++)
    {
        if(yearArr[i] < 2000)
            olderCars.push(yearArr[i]);
    }
    return olderCars;
}

module.exports = carsBuildBeforeTwoK;
