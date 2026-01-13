const names = ['Елена', 'Игорь', 'Екатерина', 'Владилен'];

//names.push('Алёна');
//names.unshift('Алёна');

//const name = names.shift();
// const name = names.pop();
// console.log('Names: ', names, name);

// console.log(names.reverse());
// const reversed = names.toReversed();
// const letters = ['e', 'c', 'd', 'b', 'a'];
// console.log(letters.toSorted());
// console.log(letters);

// console.log(names.toSpliced(2, 1));
// console.log(names);

//const greatWoman = 'Елена';
//const index1 = names.indexOf(greatWoman);
// console.log(index1);
//const newNames = names.with(index1, 'Елена Великая');
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (name, index1) {
//   if (index1 === 0) {
//     return 'Елена Великая';
//   }
//   return name;
// });

// console.log(capitalNames);

//console.log(names.includes('Игорь'));

// console.log(names.indexOf('Игорь') !== -1);
const people = [
  { name: 'Елена', budget: 42000 },
  { name: 'Игорь', budget: 25000 },
  { name: 'Екатерина', budget: 30000 },
  { name: 'Владилен', budget: 5000 },
];

// console.log(people.indexOf({ name: 'Екатерина', budget: 30000 })); // -1

//let findedPerson;

// for (let person of people) {
//   if (person.budget === 30000) {
//     findedPerson = person;
//   }
// }
// const finded = people.find((p) => p.budget === 30000);
// const finded = people.find(function (person) {
//   return person.budget === 30000;
// });

// const finded = people.findIndex(function (person) {
//   return person.budget === 30000;
// });

// console.log(people[finded]);

// let sumBudget = 0;
// const filtered = people.filter(function (p) {
//   return p.budget > 25000;
// });

// console.log(filtered);
// filtered.forEach(function (p) {
//   sumBudget = sumBudget + p.budget;
// });

// const sumBudget = people
//   .filter((p) => p.budget > 5000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

const string = 'Привет, как дела?';
const reversed = string
  .split('')
  .toReversed()
  .join('!')
  .split('')
  .filter((c) => c !== '!')
  .join('');

console.log(reversed);
