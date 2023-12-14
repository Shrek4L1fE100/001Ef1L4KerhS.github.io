const titles = [
    'important message',
    'WIN A FREE IPAD AIR! 2013 NO CLICKBAIT!! TRUEEEE',
    'You Won 100,000$ Click here to claim it!'
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