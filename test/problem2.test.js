const findLastCar = require('../problem2');

describe('findLastCar function', () => {
    it('find last car in the inventory', () => {
        const result = findLastCar();
        const expectedResult = { id: 50, car_make: 'Lincoln', car_model: 'Town Car', car_year: 1999 };
        expect(result).toEqual(expectedResult);
    });
});