const carsBuildBeforeTwoK = require('../problem5');

describe('carsBuildBeforeTwoK function', () => {
    it('should return all the cars build before year 2000', () => {
        const result = carsBuildBeforeTwoK();
        expect(result).toEqual(expectedResult);
    })
});

const expectedResult = [
    1983, 1990, 1995, 1987, 1996,
    1997, 1999, 1987, 1995, 1994,
    1985, 1997, 1992, 1993, 1964,
    1999, 1991, 1997, 1992, 1998,
    1965, 1996, 1995, 1996, 1999
  ]

