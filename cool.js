
var i=0;
setInterval(function(){
    var titles=['important message', 'CLAIM YOUR FREE IPOD AND 500,000 ROBUX! NO CLICKBAIT NO VIRUS', 'You have won 100,000$ Click here to claim it!'];//add more titles if you want
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 5000);