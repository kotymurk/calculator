const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const productBtn = document.getElementById('product');
const divisionBtn = document.getElementById('division');
let action = '+';

// console.log(resultElement.textContent);
// resultElement.textContent = 42;

// console.log(typeof sum);

plusBtn.onclick = function () {
  action = '+';
};

minusBtn.onclick = function () {
  action = '-';
};

productBtn.onclick = function () {
  action = '*';
};

divisionBtn.onclick = function () {
  action = '/';
};

// function printResult(result) {
//   if (result < 0) {
//     resultElement.style.color = 'red';
//   } else {
//     resultElement.style.color = 'green';
//   }
//   resultElement.textContent = result;
// }

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  // if (actionSymbol == '+') {
  //   return num1 + num2;
  // }

  // if (actionSymbol == '-') {
  //   return num1 - num2;
  // }
  return actionSymbol == '+'
    ? num1 + num2
    : actionSymbol == '-'
    ? num1 - num2
    : actionSymbol == '*'
    ? num1 * num2
    : actionSymbol == '/'
    ? num2 !== 0
      ? num1 / num2
      : 'Ошибка: деление на 0'
    : 0;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);

  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value);
  //   printResult(sum);
  // } else if (action == '-') {
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum);
  // }
};

function printResult(result) {
  if (typeof result === 'string') {
    resultElement.style.color = 'red';
    resultElement.textContent = result;
    return;
  }
  resultElement.style.color = result < 0 ? 'red' : 'green';
  resultElement.textContent = result;
}
