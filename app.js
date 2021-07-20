
function showTime(){

    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";

    if(hours == 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        period = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + period;

    document.querySelector('.clock-time').textContent = time;

    setInterval(showTime, 1000); 
    
};

showTime();


