const clockContainer = document.querySelector(".clock"),
    clockText = clockContainer.querySelector(".clock_text");

function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const now =`${hours<10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clockText.innerHTML = now;
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}


init();