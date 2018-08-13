exports.sayHello = (hello) => {
  if (typeof hello !== 'string')
    return null;
  if(hello)
    return `Hello ${hello}`;
}