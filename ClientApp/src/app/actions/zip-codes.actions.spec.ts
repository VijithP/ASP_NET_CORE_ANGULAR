import * as fromZipCodes from './zip-codes.actions';

describe('loadZipCodess', () => {
  it('should return an action', () => {
    expect(fromZipCodes.loadZipCodess().type).toBe('[ZipCodes] Load ZipCodess');
  });
});
