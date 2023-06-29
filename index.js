
// closure()
// closure()
// closure()
// closure()
// count ()

// document.body.innerHTML = `<h1>Hello Nigeria`

// const person = [
//   { name: 'bob', age: 25, salary: 200, job: 'developer' },
//   { name: 'peter', age: 30, salary: 400, job: 'designer' },
//   { name: 'susy', age: 55, salary: 300, job: 'the boss' },
//   { name: 'bob', age: 45, salary: 500, job: 'backened' }
// ];

// const names = person.reduce(function (acc, currItem) {
//     // console.log([...acc, currItem.name]);
//     // return acc
//   return [...acc, currItem];
// }, []);
// console.log(names);
// const btn = document.getElementById('btn')
// console.dir(btn)
// btn.classList
// localStorage.setItem('person', JSON.stringify(person))
// // localStorage.clear()
// const value = JSON.parse(localStorage.getItem('person'))
// console.log(value);
// value.map(ele =>{
//     console.log(ele);
//   document.body.innerHTML += `<h1>${ele.name}</h1>
//   <h2>${ele.job}</h2>
//     <h3>${ele.salary}</h3>
//   `
// })

// function count() {
//     let count = 0
//    return function keepTrack() {
//         console.log(count++);
//     }

  
// }
// const closure = count ()
// document.getElementById('btn').addEventListener('click', closure )

function countdown(targetDate) {
  let timer = setInterval(function() {
    const now = new Date().getTime();
    // console.log(now);
    const timeRemaining = targetDate - now;
    // console.log(timeRemaining);

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    // if (timeRemaining < 0) {
    //   clearInterval(timer);
    //   console.log("Countdown complete!");
    // }
  }, 1000);
}

// Example usage: countdown to December 31, 2023, 23:59:59 (local time)
const targetDate = new Date("june 30, 2023").getTime();
countdown(targetDate);
