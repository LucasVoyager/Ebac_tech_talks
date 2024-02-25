AOS.init();

const dateEvent = new Date("Mar 15, 2024 19:00:00");
const timeStampEvent = dateEvent.getTime();

const timerHours = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeRest = timeStampEvent - timeStampNow;

    const daysMS = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;
    const minMS = 1000 * 60;
    const ms = 1000;

    const daysUntilEvent = Math.floor(timeRest / daysMS);
    const hoursUntilEvent = Math.floor((timeRest % daysMS) / hourMS);
    const minutesUntilEvent = Math.floor((timeRest % hourMS) / minMS);
    const secondsUntilEvent = Math.floor((timeRest % minMS) / ms);

    document.getElementById('timer').innerHTML =`${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`
    if (timeRest < 0) {
        clearInterval(timerHours);
        document.getElementById('timer').innerHTML = 'Evento expirado';
    }
}, 1000);
