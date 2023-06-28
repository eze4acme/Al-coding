function count() {
    let count = 0
    function keepTrack() {
        console.log(count++);
    }
document.getElementById('btn').addEventListener('click', keepTrack)
  
}
count ()
// count ()

// document.body.innerHTML = `<h1>Hello Nigeria`