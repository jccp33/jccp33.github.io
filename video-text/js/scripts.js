"use strict";

const density = "Ñ@#W$9876543210?!abc;:+=-,._    ".split("").reverse().join("");
let streaming = false;
let video = document.querySelector('#video');
let canvas = document.querySelector('#canvas');
let photo = document.querySelector('#photo');
let startbutton = document.querySelector('#startbutton');
let width = 160;
let height = 0;
let encoded_div = document.getElementById('encoded');
let interval;

function showAscii(){
    encoded_div.innerHTML = "";
    for(let i=0; i<height; i++){
        let str = "";
        for(let j=0; j<width; j++){
            let pixel = canvas.getContext('2d').getImageData(j, i, 1, 1).data;
            let avg = Math.floor((pixel[0], pixel[1], pixel[2]) / 3);
            let mod = avg % density.length;
            let char = density[mod];
            if(char == ' ') char = '&nbsp;';
            if(char === undefined){
                console.log(pixel[0], pixel[1], pixel[2], avg, mod, char);
            }
            str += char;
        }
        encoded_div.innerHTML += str + "<br>";
    }
}

function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    let data = canvas.toDataURL('image/png');
}

video.addEventListener('canplay', function(ev){
    if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
    }
}, false);

window.addEventListener('load', ()=>{
    let p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    p.then(function(stream){
        if (navigator.mozGetUserMedia) {
            video.mozSrcObject = stream;
        } else {
            video.srcObject = stream;
        }
        video.play();
    });

    interval = setInterval(()=>{
        takepicture();

        showAscii();
    }, 100);
});
