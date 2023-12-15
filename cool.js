const titles = [
    'important message',
    'WIN FREE IPAD AND 5 MILLION ROBUX!',
    'You won your 500,000$, CLICK HERE TO CLAIM IT!'
  ]
  
  function changeTitles(titles){
    // save an iterator in a closure
    let ii = 0
    // update is run at the start
    return (function update() {
      // change the title
      document.querySelector('title').textContent = titles[(ii++ % titles.length)]
      // queue the function to be called in 5 seconds
      setTimeout(update, 5000)
    })()
  }
  
  changeTitles(titles)


  <audio id="sound1" src="clickb6-101soundboards.mp3" preload="auto"></audio>
  <button onclick="document.getElementById('sound1').play();">Play
  it</button>