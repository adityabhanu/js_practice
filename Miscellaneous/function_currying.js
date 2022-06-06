// a function that takes any function and returns curried version of that function

// func.length indicates the number of parameters expected by the function

function curry(func) {
  return function curried(...args1) {
    if (args1.length >= func.length) {
      return func.apply(this, args1);
    } else {
      return function (...args2) {
        return curried.apply(this, args1.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
