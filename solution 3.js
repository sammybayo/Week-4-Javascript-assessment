function deepFreeze(obj) {
  // Retrieve the property names defined on the object
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];

    // If the value is an object and not null, recursively freeze it
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  // Freeze the top-level object and return it
  return Object.freeze(obj);
}