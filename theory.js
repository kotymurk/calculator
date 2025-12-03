//* ----------------------operators

// let a = 10;
// let b = 5;
// let c = 32;

// c = c + a;
// c = c - a;
// c = c * a;
// c = c / a;

// c += a;
// c -= a;
// c *= a;
// c /= a;

// c = 4 ** 2;

// ================DAta types

// const age = 29;
// Number;
// const name = 'Ekaterina';
// const isProgramer = true;
// let x; //undefined
//null
// console.log(typeof null);

// console.log(typeof (1 / x));
// console.log(typeof Nan);

// ===============priority

// const fullAge = 29;
// const birthYear = 1993;
// const currentYear = 2025;
// ><

// const isFullAge = currentYear - birthYear <= fullAge;

// console.log(isFullAge);

// const num1 = 42;
// const num2 = '42';

// console.log(num1 === num2);

// theory

// const array = [1, 2, 3, 5, 20];
// // const arrayString = ['a', 'b'];

// // const array = new Array(1, 2, 3, 5);

// // console.log(array.length);

// console.log(array[0]);
// console.log(array[array.length - 1]);
// array[0] = 'Privet!';

// console.log(array);
// array[array.length] = 'becon';

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

const notes = ['записать блок про массив', 'рассказать теорию объектов'];

function render() {
  for (let i = 0; i < notes.length; i++) {}

  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]));
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]));
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  //listElement.innerHTML =
  listElement.insertAdjacentHTML(
    'beforeend',
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = '';
};

function getNoteTemplate(title) {
  return `
    <li
     class="list-group-item d-flex justify-content-between
     align-items-center"
    >
     <span>${title}</span>
     <span>
         <span class="btn btn-small btn-success">&check;</span>
         <span class="btn btn-small btn-danger">&times;</span>
     </span>
   </li>
  `;
}
