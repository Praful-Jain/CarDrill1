const findCarById = require('../problem1');

describe('findCarById function', () => {
    it('should find a car with a ID = 33', () => {
        const result = findCarById(33);
        const expectedResult = { id: 33, car_make: 'Jeep', car_model: 'Wrangler', car_year: 2011 };
        expect(result).toEqual(expectedResult);
    });
});
