const text=document.getElementById('text');
let string=""
let array=['a','p','p','l','f'];
let i=0;
var timesRun = 0;
var interval = setInterval(function(){

    string+=array[timesRun];
    text.innerHTML=string;
    timesRun += 1;
    if(timesRun === 5){
        clearInterval(interval);
    }
    
}, 1000);
