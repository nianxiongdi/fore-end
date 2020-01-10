
function getClockTime() {
    let date = new Date();
  

    let time = {
        hours: date.getHours(),
        mniues: date.getMinutes(),
        seconds: date.getSeconds(), 
        ampm: "AM"
    }

    if(time.hours == 12) {
        time.ampm = "PM";
    }else if(time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    if(time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    if(time.mniues < 10) {
        time.mniues = "0" + time.mniues;
    }

    if(time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    return time.hours + ":" + 
        time.mniues + ":" +
        time.seconds + " " +
        time.ampm;
}

function logClockTime() {
    let time = getClockTime();
    console.clear();
    console.log(time);
}


setInterval(logClockTime, 1000);


