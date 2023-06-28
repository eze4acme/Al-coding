// function count() {
//     let count = 0
//     function keepTrack() {
//         console.log(count++);
//     }
// document.getElementById('btn').addEventListener('click', keepTrack)
  
// }
// count ()
// count ()

// document.body.innerHTML = `<h1>Hello Nigeria`

const person = [
  { name: 'bob', age: 25, salary: 200, job: 'developer' },
  { name: 'peter', age: 30, salary: 400, job: 'designer' },
  { name: 'susy', age: 55, salary: 300, job: 'the boss' },
  { name: 'bob', age: 45, salary: 500, job: 'backened' }
];

const names = person.reduce(function (acc, currItem) {
    // console.log([...acc, currItem.name]);
    // return acc
  return [...acc, currItem];
}, []);
console.log(names);
const btn = document.getElementById('btn')
console.dir(btn)
btn.classList
localStorage.setItem('person', JSON.stringify(person))
// localStorage.clear()
const value = JSON.parse(localStorage.getItem('person'))
console.log(value);
value.map(ele =>{
    console.log(ele);
  document.body.innerHTML += `<h1>${ele.name}</h1>
  <h2>${ele.job}</h2>
    <h3>${ele.salary}</h3>
  `
})