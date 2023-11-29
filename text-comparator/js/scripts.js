"use strict";

const RANDOM_INT = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; };

// format date
const FORMAT_DATE = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let date_str = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
    return date_str;
}

// get distance 
const GET_DISTANCE_IN_KM = (lat1, lon1, lat2, lon2) => {
    let rad = (x) => {return x * Math.PI / 180;}
    let R = 6378.137;
    let dLat = rad( lat2 - lat1 );
    let dLong = rad( lon2 - lon1 );
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
    Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c * 1000; 
    return d / 1000 ;
}

// ajax objet 
const AJAX_OBJ = () => {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
{
// objet ajax example
/*
let ajax = AJAX_OBJ();
ajax.open("POST", url);
ajax.onreadystatechange=function(){
    if (ajax.readyState==4){
        console.log(ajax.responseText);
    }
}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("id_recom=" + recom + "&confirmed=" + status);
*/
}

// post method implementation
const ASYNC_POST = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}
{
// post method example 
/*
let post_response = ASYNCPOST(urlPost, jsonObj).then((data) => {
    console.log(data);
});
*/
}

const LOADING_DIV = document.getElementById("loading-div");
const SHOW_LOADING = () => {
    if(LOADING_DIV.style.top != '-100vh') LOADING_DIV.style.top = '-100vh';
    else LOADING_DIV.style.top = '0vh';
};

const WINDOW_MODAL = document.getElementById('div-popup');
const SWOH_WINDOW_MODAL = () => {
    if(WINDOW_MODAL.style.left != '-100%') WINDOW_MODAL.style.left = '-100%';
    else WINDOW_MODAL.style.left = '0%';
}

// left menu
const LEFT_MENU = document.getElementById("left-menu"); 
const SHOW_LEFT_MENU = () => {
    if(LEFT_MENU.style.display == "block"){
        LEFT_MENU.style.display = "none";
    }else{
        LEFT_MENU.style.display = "block";
    }
}

// right menu
const RIGHT_MENU = document.getElementById("right-menu"); 
const SHOW_RIGHT_MENU = () => {
    if(RIGHT_MENU.style.display == "block"){
        RIGHT_MENU.style.display = "none";
    }else{
        RIGHT_MENU.style.display = "block";
    }
}

// notifications 
const DIV_NOTIFICATIONS = document.getElementById('div-notifications');
const SHOW_NOTIFICATIONS = () => {
    if(DIV_NOTIFICATIONS.style.display == "block"){
        DIV_NOTIFICATIONS.style.display = "none";
    }else{
        DIV_NOTIFICATIONS.style.display = "block";
    }
}

// alert time (seconds)
const TOAST_DURATION = 10;
// framework alert
const FRAMEWORK_TOAST = (cssClass = "default", message = "Default Alert") => {
    let id = "toast-" + RANDOM_INT(10000, 99999);
    let close = `document.getElementById('${id}').style.display = 'none';`;
    let toast = `
    <div class="toast ${cssClass}" id="${id}">
        <div class="content">
            <i class="fa fa-info-circle i-toast" aria-hidden="true"></i>
            <div class="message">${message}</div>
        </div>
        <i class="fa fa-times i-toast clickable" aria-hidden="true" onclick="${close}"></i>
    </div>
    `;
    document.getElementById("div-toasts").innerHTML += toast;
    let count = 0;
    let duration = setInterval(() => {
        count++;
        if(count > TOAST_DURATION){
            toast = document.getElementById(id);
            toast.parentNode.removeChild(toast);
            clearInterval(duration);
        }
    }, 1000);
}

// framework snackbar
const DIV_SNACKBAR = document.getElementById('div-snackbar');
const FRAMEWORK_SNACKBAR = (message = 'Short Message!', btnLabel = 'ACTION', linkAction = '#') => {
    SHOW_RIGHT_MENU();
    let snackbar = `
    <div class="snackbar">
        <div class="message">
            ${message}
        </div>
        <div class="action">
            <a href="${linkAction}">${btnLabel}</a>
        </div>
    </div>
    `;
    DIV_SNACKBAR.innerHTML = "";
    DIV_SNACKBAR.innerHTML = snackbar;
    let count = 0;
    let duration = setInterval(() => {
        count++;
        if(count > TOAST_DURATION){
            DIV_SNACKBAR.innerHTML = "";
            clearInterval(duration);
        }
    }, 1000);
}

// virtual calculator
const INPUT_CALCULATOR = document.getElementById('input-calculator');
const VIRTUAL_CALCULATOR = document.getElementById('virtual-calculator');
let OP_SIGN_CALCULATOR = "+";
let VALUE1_CALCULATOR = 0;
let VALUE2_CALCULATOR = 0;
const SHOW_VIRTUAL_CALCULATOR = () => {
    if(VIRTUAL_CALCULATOR.style.bottom == "-100vh"){
        VIRTUAL_CALCULATOR.style.bottom = "0";
    }else{
        VIRTUAL_CALCULATOR.style.bottom = "-100vh";
    }
}
// copy calculator result to clipboard 
const COPY_CALCULATOR = () => {
    navigator.clipboard.writeText(INPUT_CALCULATOR.value);
    FRAMEWORK_TOAST("success", "Result copied!");
}
const CLEAR_CALCULATOR = () => {
    INPUT_CALCULATOR.value = 0;
}
// change sign to calculator result 
const CH_SIGN_CALCULATOR = () => {
    let current_value = INPUT_CALCULATOR.value;
    current_value = parseFloat(current_value);
    current_value *= -1;
    INPUT_CALCULATOR.value = current_value;
}
const SQRT_CALCULATOR = () => {
    let current_value = INPUT_CALCULATOR.value;
    current_value = parseFloat(current_value);
    if(current_value < 0){
        FRAMEWORK_TOAST("danger", "Invalid Operation!");
    }else{
        current_value = Math.sqrt(current_value);
        INPUT_CALCULATOR.value = current_value;
    }
}
// set value1 and operation
const OPERATION_CALCULATOR = (operation) => {
    let current_value = INPUT_CALCULATOR.value;
    current_value = parseFloat(current_value);
    VALUE1_CALCULATOR = current_value;
    OP_SIGN_CALCULATOR = operation;
    CLEAR_CALCULATOR();
} 
// calculate by equal sign (=) 
const CALCULATE_CALCULATOR = () => {
    // set value 2
    let current_value = INPUT_CALCULATOR.value;
    current_value = parseFloat(current_value);
    VALUE2_CALCULATOR = current_value;
    // calculate by sign
    if(OP_SIGN_CALCULATOR === "+"){
        current_value = VALUE1_CALCULATOR + VALUE2_CALCULATOR;
    }else if(OP_SIGN_CALCULATOR === "-"){
        current_value = VALUE1_CALCULATOR - VALUE2_CALCULATOR;
    }else if(OP_SIGN_CALCULATOR === "*"){
        current_value = VALUE1_CALCULATOR * VALUE2_CALCULATOR;
    }else if(OP_SIGN_CALCULATOR === "/"){
        current_value = VALUE1_CALCULATOR / VALUE2_CALCULATOR;
    }
    // show toast alert or result 
    if( !isFinite(current_value) ){
        FRAMEWORK_TOAST("danger", `Result: ${current_value} !`);
        INPUT_CALCULATOR.value = 0;
    }else{
        INPUT_CALCULATOR.value = current_value;
    }
}
const PERCEN_CALCULATOR = () => {
    if(OP_SIGN_CALCULATOR === "*"){
        // calculate percentaje
        let current_value = INPUT_CALCULATOR.value;
        current_value = parseFloat(current_value);
        VALUE2_CALCULATOR = current_value;
        current_value = VALUE1_CALCULATOR * VALUE2_CALCULATOR / 100;
        if(current_value < 0) current_value * -1;
        INPUT_CALCULATOR.value = current_value;
    }else{
        // show toast alert
        FRAMEWORK_TOAST("danger", "Invalid Operation!");
        INPUT_CALCULATOR.value = 0;
    }
}
const ADD_DIGIT_CALCULATOR = (digit) => {
    let current_value = INPUT_CALCULATOR.value;
    if(current_value === "0"){
        INPUT_CALCULATOR.value = digit;
    }else{
        INPUT_CALCULATOR.value += digit;
    }
}
const ADD_POINT_CALCULATOR = () => {
    if( !INPUT_CALCULATOR.value.includes(".") ){
        INPUT_CALCULATOR.value += ".";
    }
}

// virtual keyboard 
const INPUT_VIRTUAL_KEYBOARD = document.getElementById('input-virtual-keyboard');
let TO_UPPER_CASE = false;
let TO_PUT_ACCENT = false;
let ACCENT_KEY_PRESSED;
let INPUT_TARGET_KEYBOARD;
const VIRTUAL_KEYBOARD = document.getElementById('virtual-keyboard');
const SHOW_VIRTUAL_KEYBOARD = (input) => {
    INPUT_TARGET_KEYBOARD = document.getElementById(input);
    //console.log(INPUT_TARGET_KEYBOARD);
    if(INPUT_TARGET_KEYBOARD!=null && INPUT_TARGET_KEYBOARD!=undefined){
        INPUT_VIRTUAL_KEYBOARD.value = INPUT_TARGET_KEYBOARD.value;
    }
    if(VIRTUAL_KEYBOARD.style.right == "0px"){
        VIRTUAL_KEYBOARD.style.right = "-100%";
    }else{
        VIRTUAL_KEYBOARD.style.right = "0px";
    }
}
const ACTIVE_VIRTUAL_KEY = (key) => {
    if(key.classList.contains('arrow-left')){
        let length = INPUT_VIRTUAL_KEYBOARD.value.length;
        if(length > 0){
            let str = INPUT_VIRTUAL_KEYBOARD.value.substring(0, length-1);
            INPUT_VIRTUAL_KEYBOARD.value = str;
        }
    }else if(key.classList.contains('arrow-tab')){
        INPUT_VIRTUAL_KEYBOARD.value += '    ';
    }else if(key.classList.contains('arrow-up')){
        TO_UPPER_CASE = !TO_UPPER_CASE;
        if(TO_UPPER_CASE){
            key.style.backgroundColor = 'yellow';
        }else{
            key.style.backgroundColor = 'white';
        }
    }else if(key.classList.contains('accent-key')){
        TO_PUT_ACCENT = !TO_PUT_ACCENT;
        if(TO_PUT_ACCENT){
            key.style.backgroundColor = 'yellow';
            const key_value = key.innerText.trim();
            ACCENT_KEY_PRESSED = key_value.toUpperCase();
            //console.log(ACCENT_KEY_PRESSED);
        }
    }else if(key.innerText.trim() === "ENT"){
        //console.log(`send ${INPUT_VIRTUAL_KEYBOARD.value} to input`);
        if(INPUT_TARGET_KEYBOARD!=null && INPUT_TARGET_KEYBOARD!=undefined){
            INPUT_TARGET_KEYBOARD.value = INPUT_VIRTUAL_KEYBOARD.value;
        }
        SHOW_VIRTUAL_KEYBOARD('');
    }else if(key.innerText.trim() === "SPACE"){
        INPUT_VIRTUAL_KEYBOARD.value += ' ';
    }else{
        let key_value = key.innerText.trim().toUpperCase();
        if(TO_PUT_ACCENT){
            //console.log(ACCENT_KEY_PRESSED, key_value);
            switch(key_value){
                case 'A':
                    ACCENT_KEY_PRESSED==='´' ? key_value='Á' : 'Ä';
                    break;
                case 'E':
                    ACCENT_KEY_PRESSED==='´' ? key_value='É' : 'Ë';
                    break;
                case 'I':
                    ACCENT_KEY_PRESSED==='´' ? key_value='Í' : 'Ï';
                    break;
                case 'O':
                    ACCENT_KEY_PRESSED==='´' ? key_value='Ó' : 'Ö'
                    break;
                case 'U':
                    ACCENT_KEY_PRESSED==='´' ? key_value='Ú' : 'Ü'
                    break;
                default:
                    key_value = ACCENT_KEY_PRESSED + key_value;
                    break;
            }
            let accents_key = document.getElementsByClassName('accent-key');
            for(let i=0; i<accents_key.length; i++) {
                accents_key[i].style.backgroundColor = 'white';
            }
            TO_PUT_ACCENT = !TO_PUT_ACCENT;
        }
        if(TO_UPPER_CASE){
            INPUT_VIRTUAL_KEYBOARD.value += key_value.toUpperCase();
        }else{
            INPUT_VIRTUAL_KEYBOARD.value += key_value.toLowerCase();
        }
    }
}

// const to sort tables
const GET_CELL_VALUE = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
// sort table by titles
const COMPARER = function (idx, asc) {
    return function (a, b) {
        return function (v1, v2) {
            return (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2))
                ? v1 - v2
                : v1.toString().localeCompare(v2);
        }(GET_CELL_VALUE(asc ? a : b, idx), GET_CELL_VALUE(asc ? b : a, idx));
    }
};
document.querySelectorAll('th').forEach(th => th.addEventListener('click', () => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
        .sort(COMPARER(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr));
}));

window.addEventListener('online', (e) => {
    FRAMEWORK_TOAST('success', 'Internet connection restored!');
    //console.log(e, 'online');
});
window.addEventListener('offline', (e) => {
    FRAMEWORK_TOAST('danger', 'Internet connection lost!');
    //console.log(e, 'offline');
});


// ---------- testing ---------- //
const loadingInterval = setInterval(()=>{
    SHOW_LOADING();
    clearInterval(loadingInterval);
}, 2000);

function ShowAlertsExample(){
    SHOW_RIGHT_MENU();
    let alert_count = 0;
    let alert_interval = setInterval(()=>{
        switch(alert_count){
            case 2: 
                FRAMEWORK_TOAST();
                break;
            case 4:
                FRAMEWORK_TOAST("primary", "Alert Primary");
                break;
            case 6:
                FRAMEWORK_TOAST("secondary", "Alert Secondary");
                break;
            case 8:
                FRAMEWORK_TOAST("success", "Alert Success");
                break;
            case 10:
                FRAMEWORK_TOAST("danger", "Alert Danger");
                break;
            case 12:
                FRAMEWORK_TOAST("warning", "Alert Warning");
                break;
            case 14:
                FRAMEWORK_TOAST("info", "Alert Info");
                break;
            default:
                break;
        };

        if(alert_count > 15) clearInterval(alert_interval);
        alert_count++;
    }, 2000);
}
