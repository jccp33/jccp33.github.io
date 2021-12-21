"use strict"

let btn_exp = document.getElementById('btn_exp');
let div_exp = document.getElementById('experience');
let btn_edu = document.getElementById('btn_edu');
let div_edu = document.getElementById('education');
let sect_home = document.getElementById('section-home');
let sect_about = document.getElementById('section-about');
let sect_portfolio = document.getElementById('section-portfolio');

btn_exp.addEventListener('click', (e)=>{
    div_exp.classList.remove('hidden');
    div_edu.classList.add('hidden');
    btn_exp.classList.add('tab-item-active');
    btn_edu.classList.remove('tab-item-active');
});

btn_edu.addEventListener('click', (e)=>{
    div_exp.classList.add('hidden');
    div_edu.classList.remove('hidden');
    btn_exp.classList.remove('tab-item-active');
    btn_edu.classList.add('tab-item-active');
});

function ShowHome(){
    sect_home.classList.remove('hidden');
    sect_about.classList.add('hidden');
    sect_portfolio.classList.add('hidden');
}

function ShowAbout(){
    sect_home.classList.add('hidden');
    sect_about.classList.remove('hidden');
    sect_portfolio.classList.add('hidden');
}

function ShowPortfolio(){
    sect_home.classList.add('hidden');
    sect_about.classList.add('hidden');
    sect_portfolio.classList.remove('hidden');
}