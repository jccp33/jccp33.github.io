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

// loading
const LOADING_DIV = document.getElementById("loading-div");
const SHOW_LOADING = () => {
    if(LOADING_DIV.style.top != '-100vh') LOADING_DIV.style.top = '-100vh';
    else LOADING_DIV.style.top = '0vh';
};

// modals
const SWOH_WINDOW_MODAL = (id_modal) => {
    let WINDOW_MODAL = document.getElementById(id_modal);
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

window.addEventListener('load', ()=>{
    SHOW_LOADING();
});

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

// charts
let xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
];
new Chart("myChart", {
    type: "scatter",
    data: {
        datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "My Chart",
            fontSize: 16
        },
        scales: {
            xAxes: [{ticks: {min: 40, max:160}}],
            yAxes: [{ticks: {min: 0, max:20}}],
        }
    }
});

let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [25, 36, 48, 24, 15];
let barColors = ["red", "green","blue","orange","brown"];
new Chart("myChart2", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "My Chart 2",
            fontSize: 16
        },
        scales: {
            xAxes: [{ticks: {min: 0, max:100}}],
            yAxes: [{ticks: {min: 0, max:50}}],
        }
    }
});


function exportTableToExcel(){
    //let tableID, 
    let filename = 'file-excel';
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById('users-table');
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename ? filename+'.xls' : 'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}
