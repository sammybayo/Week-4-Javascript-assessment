function deepEqual(objA, objB) {
  // Base case: check for strict equality (handles primitives and same object references)
  if (objA === objB) return true;

  // If either is null or not an object, they aren't deeply equal (since they didn't pass the strict equality check)
  if (objA === null || typeof objA !== 'object' || objB === null || typeof objB !== 'object') {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // If the number of keys differs, the objects are not equal
  if (keysA.length !== keysB.length) return false;

  // Recursively check each key and value
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}