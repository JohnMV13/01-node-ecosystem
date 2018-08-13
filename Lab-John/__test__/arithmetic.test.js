const math = require('../lib/arithmetic');
describe('add', () => {
  it('can add correct numbers', () => {
    expect(math.add(2, 4)).toBe(6);
  })
  it('should return null if NaN', () => {
    expect(math.add('hello', 3)).toBe(null);
  })
})
describe('sub', () => {
  it('can subtract two numbers', () => {
    expect(math.sub(10, 5)).toBe(5);
  })
  it('should return null if NaN', () => {
    expect(math.sub('hello', 4)).toBe(null);
  })
})