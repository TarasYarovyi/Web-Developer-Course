const print = (a) => console.log(a);
print("hello");
const getObj = () => ({ text: "test" });
console.log(getObj());

// let Bar = () => {};
// const bar1 = new Bar();// Bar is not a constructor
let Bar = function () {};
const bar1 = new Bar(); // ok

const argTest = function () {
  console.log(arguments);
};
argTest(1, 2, 3); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// const arrowArgTest = () => {
//   console.log(arguments);
// };
// arrowArgTest(1, 2, 3);//script.js:18 Uncaught ReferenceError: arguments is not defined

const arrowArgTest = (...parametrs) => {
  console.log(parametrs);
};
arrowArgTest(1, 2, 3); // [1, 2, 3] - ok

const arrowThisTest = {
  data: "Hello",
  standardFunc: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
  arrowFunc: function () {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
};

arrowThisTest.standardFunc(); //window :-(
arrowThisTest.arrowFunc(); //ok :-)
