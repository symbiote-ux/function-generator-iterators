const range = function* (from, to, step = 1) {
  let x = from;
  while (x != to) {
    yield x;
    x += step;
  }
};

const take = function* (times, coll) {
  let x = times;
  let iter = coll[Symbol.iterator]();
  for (item of iter) {
    yield item;
    x--;
    if (x == 0) return;
  }
};

const cycle = function* (coll) {
  while (true) {
    yield* coll;
  }
};

const repeat = function* (item) {
  while (true) {
    yield item;
  }
};

const partition = function* (size, coll) {
  const iter = coll[Symbol.iterator]();
  const result = iter.next();
  let x = [];
  while (!result.done) {
    x.push(result.value);
    if (x.length === size) {
      yield x;
      x = [];
    }
    result = iter.next();
  }
  if (x.length > 0) {
    yield x;
  }
};

module.exports = {
  range,
  take,
  cycle,
  repeat,
  partition,
};
