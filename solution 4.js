function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get value() {
      return count;
    }
  };
}