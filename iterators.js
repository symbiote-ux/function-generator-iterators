const rangeIterator = function (start, stop) {
  let current = start;
  return {
    next: function () {
      if (current < stop) {
        let x = current;
        current++;
        return { value: x, done: false };
      }
      return { value: current, done: true };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
};
