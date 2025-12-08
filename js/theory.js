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

/** 
// console.log(inputElement.value);

// const notes = ['записать блок про массив', 'рассказать теорию объектов'];

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//   // }
//   for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   //listElement.innerHTML =
//   listElement.insertAdjacentHTML(
//     'beforeend',
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = '';
// };

// function getNoteTemplate(title) {
//   return `
//     <li
//      class="list-group-item d-flex justify-content-between
//      align-items-center"
//     >
//      <span>${title}</span>
//      <span>
//          <span class="btn btn-small btn-success">&check;</span>
//          <span class="btn btn-small btn-danger">&times;</span>
//      </span>
//    </li>
//   `;
// }
*/
/** 
 *
const person = {
  firstName: 'Vladilen',
  lastName: 'Minin',
  year: 1993,
  hasGirlfriend: false,
  languages: ['ru', 'en', 'de'],
  getFullName: function () {
    console.log(person.firstName + '' + person.lastName);
  },
};

console.log(person.year);
console.log(person['languages']);
const key = 'hasGirlfriend';
console.log(person[key]);
person.hasGirlfriend = true;
console.log(person[key]);
person.getFullName();
*/

const notes = [
  {
    title: 'записать блок про массивы',
    completed: false,
  },
  {
    title: 'рассказать теорию объектов',
    completed: true,
  },
];

function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Нет элементов</p>';
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }
  // for (let note of notes) {
  //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
  // }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  //listElement.innerHTML =
  // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote));
  inputElement.value = '';
};

listElement.onclick = function (event) {
  if (event.target.dataset.index1) {
    const index1 = Number(event.target.dataset.index1);
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      notes[index1].completed = !notes[index1].completed;
    } else if (type === 'remove') {
      notes.splice(index1, 1);
    }

    render();
  }
};

function getNoteTemplate(note, index1) {
  return `
    <li
     class="list-group-item d-flex justify-content-between
     align-items-center"
    >
     <span class="${note.completed ? 'text-decoration-line-through' : ''}">${
    note.title
  }</span>
     <span>
         <span class="btn btn-small btn-${
           note.completed ? 'warning' : 'success'
         }" data-index1 ="${index1}" data-type="toggle">&check;</span>
         <span class="btn btn-small btn-danger" data-index1 ="${index1}" data-type="remove">&times;</span>
     </span>
   </li>
  `;
}
