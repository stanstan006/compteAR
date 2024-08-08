const monthEl = document.querySelector(".month")

const daysEl = document.querySelector(".day")

const hoursEl = document.querySelector(".hour")

const minutesEl = document.querySelector(".minute")

const secondsEl = document.querySelector(".second")

const newYear = new Date("Jan 1, 2025 00:00:00").getTime()

function dateCompteAR() {
    const now = new Date().getTime()

    const distance = newYear - now

    const seccond = 1000;
    const minute = seccond * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = 30

    const d =Math.floor(distance/day)
    const h = Math.floor((distance % day) / hour)
    const m = Math.floor((distance % hour) / minute)
    const s = Math.floor((distance % minute) / seccond)

    const months = Math.floor(d/ month)
    

    daysEl.innerHTML = d
    hoursEl.innerHTML = h < 10? "0" + h : h
    minutesEl.innerHTML = m < 10? "0" + m : m
    secondsEl.innerHTML = s < 10? "0" + s : s
    monthEl.innerHTML = months < 10? "0" + months : months

}

setInterval(dateCompteAR, 1000)