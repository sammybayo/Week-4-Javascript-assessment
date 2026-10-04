function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // Check for removed and changed properties
  for (const key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  // Check for added properties
  for (const key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    }
  }

  return result;
}