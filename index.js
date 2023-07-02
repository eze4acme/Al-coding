const person = [
  { name: 'bob', age: 25, salary: 200, job: 'developer' },
  { name: 'peter', age: 30, salary: 400, job: 'designer' },
  { name: 'susy', age: 55, salary: 300, job: 'the boss' },
  { name: 'bob', age: 45, salary: 500, job: 'backened' }
];

const per = person.reduce((acc, curItem) => {
  const {name, age, salary, job} = curItem

    
     return [...acc, curItem]
 
}, [])
console.log(per);
const totalAge = person.reduce((acc, curItem) => {
  const {name, age, salary, job} = curItem
  return acc + age
}, 0)
console.log(totalAge);
console.log(person.at(-1).name);
const txt = 'mike'
const arr = ['mike', 'bob', 'louk']
if (arr.includes(txt)) {
  console.log(`hi iam `);
}

const par = person.find(ele => {
  const {name, age, salary, job} = ele

  if (name.includes('peter')) {
    return ele
  }
})
console.log(par.salary);

const text = 's'
const filt = person.filter(ele =>{
  const {name, age, salary, job} = ele
    return name.includes(text)
  })
  console.log(filt);


  const url = 'https://course-api.com/react-tabs-project'

  const res = await fetch('https://course-api.com/react-tabs-project')
  const data = await res.json()

  console.log(data);

  
  // const obj2 = Object.values(obj)
  // console.log(obj2);
  const check = Array.from({length:4}, () => Math.floor(Math.random()*10))
  console.log(check);
  
  const check2 = Array.from({length:4}, (_, index) => index)
  console.log(check2);
  
  function passWrd(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    return Array.from({length}, () => characters.at(Math.floor(Math.random()*characters.length))).join('')
  }
  console.log(passWrd(9));
  
  console.log(Array.from({length:100}, (_, index) => index));
  const udemy = 'udemy'
  console.log(Array.from(udemy));
  const obj3 =  { name: 'bob', age: 25, salary: 200, job: 'developer' }
  console.log((Object.entries(obj3)));
console.log(Array.from(Object.entries(obj3).flat()));