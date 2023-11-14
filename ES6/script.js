//ArrayOf
console.log(
  Array.of(1, 2, 3, {}, [], function () {
    return 1;
  })
);

//arrayGrom
console.log(Array.from("String"));

// array.from + function
console.log(Array.from("string", (el) => el.toLocaleUpperCase()));

// array.from + function + this
const obj = { value: 10 };
console.log(
  Array.from(
    [1, 2, 3, 4, 5],
    function (el) {
      return el * this.value;
    },
    obj
  )
);

//fill
console.log([1, 2, 3, 4, 5].fill(0));

//fill from
console.log([1, 2, 3, 4, 5].fill(0, 2));

//fill from to
console.log([1, 2, 3, 4, 5].fill(0, 2, 4));

//find
console.log([1, 2, 3, 4, 5].find((v) => v > 3));

//findIndex
console.log([1, 2, 3, 4, 5].findIndex((v) => v > 3));

//copyWithin
console.log([1, 2, 3, 4, 5].copyWithin(1, 3));

//copyWithin
console.log([1, 2, 3, 4, 5].copyWithin(1, 3, 4));

const arr = [1, [], {}, "string"];

//arr.values
for (const item of arr.values()) console.log(item);
//arr.keys
for (const item of arr.keys()) console.log(item);
//arr.entries
for (const item of arr.entries()) console.log(item);
