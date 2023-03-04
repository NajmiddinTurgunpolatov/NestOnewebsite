"use strict";

let navlinks = document.getElementById("linklari")

function show() {
    navlinks.style.right = "0%"
}
function hide() {
    navlinks.style.right = "-101%"
  
}

const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " Sizdan talab qilinadi:"
    }, 0)
    setTimeout(() => {
        text.textContent = " Ingliz tilini orta darajada bilish"
    }, 8000)
    setTimeout(() => {
        text.textContent = " Yuqori mativatsiya"
    }, 16000)
    setTimeout(() => {
        text.textContent = " Bir kunda 2-3 soat dasturlashga vaqt ajratish"
    }, 24000)
    setTimeout(() => {
        text.textContent = "Har oyda 2 ta shaxsiy portfolio tuzish"
    }, 32000) 
}
textLoad() 
const textLoad1 = () => {
    setTimeout(() => {
        text.textContent = " Front end developer"
    }, 40000)
    setTimeout(() => {
        text.textContent = " Web Dev Learner"
    }, 48000)
    setTimeout(() => {
        text.textContent = " Simple Boy"
    }, 60000)
    setTimeout(() => {
        text.textContent = " Hello everybody"
    }, 68000)
    setTimeout(() => {
        text.textContent = "Hudo hohlasa fulsteck senior developer bo`laman"
    }, 80000) 
}
textLoad1() 