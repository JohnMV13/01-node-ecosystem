const greeter = require('../lib/greet');
console.log(greeter);

describe('greeter', () => {
  it('returns null when it isn\'t given a string', () => {
    expect(greeter.sayHello(1)).toBe(null)
  });
  it('can greet anyone', () => {
    expect(greeter.sayHello('world')).toBe('Hello world');
  });
  it('can greet someone by name', () => {
    expect(greeter.sayHello('Keith')).toBe('Hello Keith');
  })
})