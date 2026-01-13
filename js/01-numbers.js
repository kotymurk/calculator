const number = 42; //integer number
const float = 3.14; //float number;
const pow = 10e3;
const big = 1_000_000;
const negative = -10;

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Math.pow(2, 53) - 1);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// // console.log(1 / 0);
// console.log(Number.isFinite(42));
// console.log(23 / undefined)
// const weird = 23 / undefined
// console.log(Number.isNaN(weird));

const strInt = '42';
const strFloat = '42.42';

// console.log(Number(strInt));
// console.log(Number(strFloat));

// console.log(parseInt(strInt) );
// console.log(parseFloat(strFloat) );
// console.log(+strInt, +strFloat);

const fixed = (0.1 + 0.2).toFixed(10);
console.log(parseFloat(fixed));

// Big Int
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 9422480n);
// console.log(-42n);
// // console.log(42.42n); // error

// // console.log(10n - 4); // error
// console.log(parseInt(10n) - 4);
// console.log(10n - BigInt(4));
// console.log(5n / 2n); // 2n
