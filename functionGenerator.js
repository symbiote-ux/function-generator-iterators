const idMaker = function* () {
  let index = 0;
  while (true) yield index++;
};

const anotherGenerator = function* (i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
};

const generator = function* (i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
};

const logGenerator = function* () {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
};

const powers = function* (num, power) {
  let curr = num;
  let count = 0;
  while (count != power) {
    yield curr;
    curr *= num;
    count++;
  }
};

for (let power of powers(3, 10)) {
  console.log(power);
};
