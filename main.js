function count() {
    let count = 0
   return function keepTrack() {
        document.getElementById('game').textContent = count++
    }

  
}
const closure = count ()
document.getElementById('btn').addEventListener('click', closure )



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.map(number =>{
   document.querySelector('.number-section').innerHTML +=`<h1 class='item'>${number}</h1>`
})