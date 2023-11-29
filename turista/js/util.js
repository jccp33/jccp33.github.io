"use strict";

let FINISH = false;

let gamers = [];

const ALL_COLORS = [
    {
        color: "blue",
        available: true
    },
    {
        color: "gray",
        available: true
    },
    {
        color: "green",
        available: true
    },
    {
        color: "pink",
        available: true
    },
    {
        color: "red",
        available: true
    },
    {
        color: "yellow",
        available: true
    }
]

const mssgs = [
    "EN EL AEROPUERTO TOMASTE UNA MALETA EQUIVOCADA, PAGA $1,500 AL BANCO PARA SU DEVOLUCION",
    "TE HAN CONFUNDIDO CON UN TERRORISTA, RECIBE $10,000 DEL BANCO EN RECOMPENSA",
    "HAY UN NUEVO IMPUESTO EN TU PAIS, PAGA $10,000 POR CADA HOTEL Y $5,000 POR CADA CASA QUE POSEES",
    "HICISTE UNA BUENA INVERSION EN SUIZA, COBRA $7,500 AL BANCO",
    "LA AEROLINEA NORTEAMERICANA VENDIO EL ASIENTO QUE TENIAS RESERVADO, RECIBE $1,500 DE CADA JUGADOR COMO COMPENSACION",
    "UN LOCO COLOCO UNA BOMBA EN EL AEROPUERTO Y RETRASO TU VUELO, RECIBE $3,500 COMO COMPENSACION",
    "POR ENTRAR A LA CIUDAD PROHIBIDA DE CHINA TE ARRESTAN, PAGA $5,200 DE MULTA",
    "POR ALIMENTAR A LOS ANIMALES DE UN ZOLOGICO FRANCES PAGAS AL BANCO $3,800",
    "POR SE UN EXCELENTE CIUDADANO EN TU PAIS, RECIBES UN PREMIO EN EFECTIVO DE $8,000",
    "CON TU ACTITUD OFENDISTE A LOS DEMAS JUGADORES, PAGA A CADA UNO $1,000 COMO DISCULPA"
];

const _emails = [
    "ES TU DIA DE SUERTE, EL BANCO TE DEPOSITO POR ERROR $15,000, TU DECIDES SI LO CONSERVAS O LO REGRESAS",
    "TU PISTOLA DE JUGUETE ASUSTO A LAS PERSONAS EN EL AEROPUERTO, PAGA $2,500 POR LOS DAÑOS OCASIONADOS",
    "EL AVION AL QUE SUBISTE SUFRIO DESPERFECTOS, RECIBE $4,500 EN COMPENSACION",
    "TE ENCONTRARON UNA RESORTERA EN EUA Y TE COBRAN $1,500 DE MULTA, IMAGINA SI TRAJERAS UNA PISTOLA",
    "ALGUIEN DE TU CLASE PUEDE AYUDAR A LA CARIDAD, PAGA AL BANCO EL PRECIO DE TU PROPIEDAD MAS CARA",
    "POR USAR TURBANTE TE CONFUNDEN CON UN TERRORISTA, PAGA $10,000 POR LOS INCONVENIENTES QUE CAUSASTE",
    "NO DEBISTE SUBIR A TU MISHI AL AVION, PAGA $1,700 COMO MULTA",
    "ESTADOS UNIDOS ES UN BUEN PAIS PARA INVERTIR, RECIBE $10,000 DEL BANCO",
    "POR CAZAR CONEJOS EN UN PARQUE PROTEJIDO DE ESTADOS UNIDOS TE COBRAN $4,800 DE MULTA",
    "EN HORA BUENA! COMPRASTE UN BILLETE PREMIADO EN MEXICO, COBRA TU PREMIO DE $17,500"
];

const properties = [
    {
        id: 112,
        box: "box112",
        name: "marruecos",
        price: 6000,
        rent: 500,
        house: 2500,
        houses: 0,
        hotel: 7500,
        hotels: 0,
        rent_hotel: 30000,
        third: 1,
        hypothecate: 3000,
        img: "marruecos.png"
    },
    {
        id: 114,
        box: "box114",
        name: "sudafrica",
        price: 11000,
        rent: 1500,
        house: 5000,
        houses: 0,
        hotel: 10000,
        hotels: 0,
        rent_hotel: 57000,
        third: 1,
        hypothecate: 5500,
        img: "sudafrica.png"
    },
    {
        id: 115,
        box: "box115",
        name: "egipto",
        price: 8000,
        rent: 1000,
        house: 5000,
        houses: 0,
        hotel: 8500,
        hotels: 0,
        rent_hotel: 37000,
        third: 1,
        hypothecate: 3500,
        img: "egipto.png"
    },
    {
        id: 116,
        box: "box116",
        name: "aerolinea afroasiatica",
        price: 10000,
        rent: 2500,
        airlines: 0,
        hypothecate: 5000,
        third: 0,
        img: "aerolinea.png"
    },
    {
        id: 117,
        box: "box117",
        name: "rusia",
        price: 12000,
        rent: 1500,
        house: 4500,
        houses: 0,
        hotel: 7500,
        hotels: 0,
        rent_hotel: 60000,
        third: 2,
        hypothecate: 6000,
        img: "russia.png"
    },
    {
        id: 119,
        box: "box119",
        name: "china",
        price: 14000,
        rent: 1500,
        house: 5500,
        houses: 0,
        hotel: 7500,
        hotels: 0,
        rent_hotel: 70000,
        third: 2,
        hypothecate: 7000,
        img: "china.png"
    },
    {
        id: 120,
        box: "box120",
        name: "japon",
        price: 19000,
        rent: 2500,
        house: 8500,
        houses: 0,
        hotel: 10000,
        hotels: 0,
        rent_hotel: 85500,
        third: 2,
        hypothecate: 9500,
        img: "japon.jpg"
    },
    {
        id: 110,
        box: "box110",
        name: "canada",
        price: 15000,
        rent: 2000,
        house: 6000,
        houses: 0,
        hotel: 10000,
        hotels: 0,
        rent_hotel: 75000,
        third: 3,
        hypothecate: 7500,
        img: "canada.png"
    },
    {
        id: 99,
        box: "box99",
        name: "estados unidos",
        price: 20000,
        rent: 2500,
        house: 7500,
        houses: 0,
        hotel: 10000,
        hotels: 0,
        rent_hotel: 100000,
        third: 3,
        hypothecate: 10000,
        img: "usa.png"
    },
    {
        id: 77,
        box: "box77",
        name: "mexico",
        price: 13000,
        rent: 1500,
        house: 5500,
        houses: 0,
        hotel: 7500,
        hotels: 0,
        rent_hotel: 65000,
        third: 3,
        hypothecate: 6500,
        img: "mexico.png"
    },
    {
        id: 66,
        box: "box66",
        name: "aerolinea norteamericana",
        price: 10000,
        rent: 2500,
        airlines: 0,
        hypothecate: 5000,
        third: 0,
        img: "aerolinea.png"
    },
    {
        id: 55,
        box: "box55",
        name: "guatemala",
        price: 5000,
        rent: 500,
        house: 2500,
        houses: 0,
        hotel: 3500,
        hotels: 0,
        rent_hotel: 25000,
        third: 4,
        hypothecate: 2500,
        img: "guatemala.png"
    },
    {
        id: 44,
        box: "box44",
        name: "costa rica",
        price: 5000,
        rent: 500,
        house: 2500,
        houses: 0,
        hotel: 3500,
        hotels: 0,
        rent_hotel: 25000,
        third: 4,
        hypothecate: 2500,
        img: "costa_rica.png"
    },
    {
        id: 22,
        box: "box22",
        name: "panama",
        price: 4000,
        rent: 500,
        house: 2500,
        houses: 0,
        hotel: 3000,
        hotels: 0,
        rent_hotel: 20000,
        third: 4,
        hypothecate: 2000,
        img: "panama.png"
    },
    {
        id: 10,
        box: "box10",
        name: "colombia",
        price: 10000,
        rent: 1500,
        house: 4500,
        houses: 0,
        hotel: 6500,
        hotels: 0,
        rent_hotel: 50000,
        third: 5,
        hypothecate: 5000,
        img: "colombia.png"
    },
    {
        id: 8,
        box: "box8",
        name: "venezuela",
        price: 10000,
        rent: 1500,
        house: 5000,
        houses: 0,
        hotel: 5000,
        hotels: 0,
        rent_hotel: 50000,
        third: 5,
        hypothecate: 5000,
        img: "venezuela.png"
    },
    {
        id: 7,
        box: "box7",
        name: "peru",
        price: 9000,
        rent: 1000,
        house: 4500,
        houses: 0,
        hotel: 5500,
        hotels: 0,
        rent_hotel: 55000,
        third: 5,
        hypothecate: 4500,
        img: "peru.png"
    },
    {
        id: 6,
        box: "box6",
        name: "aerolinea sudamericana",
        price: 10000,
        rent: 2500,
        airlines: 0,
        hypothecate: 5000,
        third: 0,
        img: "aerolinea.png"
    },
    {
        id: 5,
        box: "box5",
        name: "brazil",
        price: 13000,
        rent: 1500,
        house: 6500,
        houses: 0,
        hotel: 7500,
        hotels: 0,
        rent_hotel: 65000,
        third: 6,
        hypothecate: 6500,
        img: "brazil.png"
    },
    {
        id: 3,
        box: "box3",
        name: "chile",
        price: 9000,
        rent: 1000,
        house: 5000,
        houses: 0,
        hotel: 6000,
        hotels: 0,
        rent_hotel: 45000,
        third: 6,
        hypothecate: 4500,
        img: "chile.png"
    },
    {
        id: 2,
        box: "box2",
        name: "argentina",
        price: 12000,
        rent: 1500,
        house: 5000,
        houses: 0,
        hotel: 5500,
        hotels: 0,
        rent_hotel: 62500,
        third: 6,
        hypothecate: 4500,
        img: "argentina.png"
    },
    {
        id: 12,
        box: "box12",
        name: "españa",
        price: 14000,
        rent: 2000,
        house: 6500,
        houses: 0,
        hotel: 8000,
        hotels: 0,
        rent_hotel: 70000,
        third: 7,
        hypothecate: 7000,
        img: "espana.png"
    },
    {
        id: 23,
        box: "box23",
        name: "francia",
        price: 18000,
        rent: 2500,
        house: 10000,
        houses: 0,
        hotel: 12500,
        hotels: 0,
        rent_hotel: 95000,
        third: 7,
        hypothecate: 9000,
        img: "francia.png"
    },
    {
        id: 45,
        box: "box45",
        name: "inglaterra",
        price: 16000,
        rent: 2500,
        house: 10000,
        houses: 0,
        hotel: 14000,
        hotels: 0,
        rent_hotel: 85000,
        third: 7,
        hypothecate: 8000,
        img: "inglaterra.png"
    },
    {
        id: 56,
        box: "box56",
        name: "aerolinea europea",
        price: 10000,
        rent: 2500,
        airlines: 0,
        hypothecate: 5000,
        third: 0,
        img: "aerolinea.png"
    },
    {
        id: 67,
        box: "box67",
        name: "italia",
        price: 17500,
        rent: 2000,
        house: 9500,
        houses: 0,
        hotel: 12500,
        hotels: 0,
        rent_hotel: 80700,
        third: 8,
        hypothecate: 8500,
        img: "italia.jpg"
    },
    {
        id: 89,
        box: "box89",
        name: "suiza",
        price: 18000,
        rent: 2300,
        house: 7600,
        houses: 0,
        hotel: 9000,
        hotels: 0,
        rent_hotel: 83000,
        third: 8,
        hypothecate: 9000,
        img: "suiza.png"
    },
    {
        id: 100,
        box: "box100",
        name: "alemania",
        price: 18000,
        rent: 2500,
        house: 10500,
        houses: 0,
        hotel: 13000,
        hotels: 0,
        rent_hotel: 95000,
        third: 8,
        hypothecate: 9500,
        img: "alemania.png"
    }
];

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
});

let all_messages = {
    messages: mssgs,
    current: 0
}

let all_emails = {
    emails: _emails,
    current: 0
}

let player_turns = {
    current: 1,
    turns: []
}

let gamer_bank = {
    id: "gamer_bank",
    index: 0,
    name: "BANCO",
    money: 0,
    properties: undefined,
    selectId: "bank-prop",
    updateView: ()=>{
        document.getElementById("bank-money").innerHTML = "DINERO: " + formatter.format(gamer_bank.money);
        document.getElementById(gamer_bank.selectId).innerHTML = "";
        for (let i=0; i<gamer_bank.properties.length; i++){
            let option = document.createElement("option");
            option.value = gamer_bank.properties[i].box;
            option.text = gamer_bank.properties[i].name.toUpperCase();
            document.getElementById(gamer_bank.selectId).appendChild(option);
        }
    },
    showProperty: ()=>{
        let id = document.getElementById(gamer_bank.selectId).value;
        if(id !== ""){
            ShowPropertie(id, "<strong>BANCO</strong>");
        }else{
            document.getElementById("modal-title").innerHTML = "BANCO";
            document.getElementById("modal-body").innerHTML = `
            NO TIENES PROPIEDADES PARA MOSTRAR
            `;
            document.getElementById("modal").style.display = "block";
        }
    }
}

function justNumbers(e){
	var keynum = window.event ? window.event.keyCode : e.which;
	if (keynum == 8) return true;
	return /\d/.test(String.fromCharCode(keynum));
}

function removeElementById(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShowTextInConsole(text, color = "white"){
    let console = document.getElementById("console");
    let message = `
    <div style="color: ${color};">
    ${text.toUpperCase()}
    </div>
    <br>
    `;
    console.innerHTML +=  message;
    console.scrollTop = console.scrollHeight;
}

function CloseModal(){
    document.getElementById("modal").style.display = "none";
    if(FINISH){
        location.reload();
    }
}

function ShowPropertie(id, proprietary = ""){
    let property = properties.find(obj => { return obj.box === id;} );

    if(proprietary !== ""){
        document.getElementById("modal-title").innerHTML = property.name.toUpperCase() + ` (<strong>${proprietary}</strong>)`;
    }else{
        document.getElementById("modal-title").innerHTML = property.name.toUpperCase();
    }
    
    if(property.name.includes("aerolinea")){
        document.getElementById("modal-body").innerHTML = `
        <img src="img/${property.img}" alt="${property.name.toUpperCase()}" title="${property.name.toUpperCase()}" width="160" height="160">
        <br>
        COSTO: ${formatter.format(property.price)}
        <br>
        RENTA: ${formatter.format(property.rent)}
        <br>
        1 Aerolinea: ${formatter.format(property.rent * 1)}
        <br>
        2 Aerolineas: ${formatter.format(property.rent * 2)}
        <br>
        3 Aerolineas: ${formatter.format(property.rent * 3)}
        <br>
        4 Aerolineas: ${formatter.format(property.rent * 4)}
        <br>
        Hipotecado por: ${formatter.format(property.hypothecate)}
        `;
    }else{
        let third = "";
        for(let i=0; i<properties.length; i++){
            if(properties[i].third === property.third){
                third += properties[i].name.toUpperCase() + ", ";
            }
        }

        document.getElementById("modal-body").innerHTML = `
        <img src="img/${property.img}" alt="${property.name.toUpperCase()}" title="${property.name.toUpperCase()}" width="160" height="160">
        <br>
        COSTO: ${formatter.format(property.price)}
        <br>
        RENTA: ${formatter.format(property.rent)}
        <br>
        COSTO POR CASA: ${formatter.format(property.house)}
        <br>
        COSTO POR HOTEL: ${formatter.format(property.hotel)}
        <br>
        Renta de 1 casa: ${formatter.format(property.house * 1)}
        <br>
        Renta de 2 casas: ${formatter.format(property.house * 2)}
        <br>
        Renta de 3 casas: ${formatter.format(property.house * 3)}
        <br>
        Renta de 4 casas: ${formatter.format(property.house * 4)}
        <br>
        Renta del Hotel: ${formatter.format(property.rent_hotel)}
        <br>
        Hipotecado por: ${formatter.format(property.hypothecate)}
        <br>
        * Si tienes la tercia cobras el doble
        <br>
        Tercia: ${third}
        `;
    }
    document.getElementById("modal").style.display = "block";
}

function ShowGamerPropertie(gamerIndex, propertyId){
    let gamer = gamers[gamerIndex];
    let property = gamer.properties.find(obj => { return obj.box === propertyId;} );

    let body = `
    <img src="img/${property.img}" alt="${property.name.toUpperCase()}" title="${property.name.toUpperCase()}" width="160" height="160">
    <br><br>
    PRECIO DE ${property.name.toUpperCase()}: ${formatter.format(property.price)}
    <br><br>
    <strong>${gamer.name.toUpperCase()}, TIENES: ${formatter.format(gamer.money)}</strong>
    <br><br>
    CASAS (${formatter.format(property.house)}): ${property.houses}
    <br><br>
    HOTELES (${formatter.format(property.hotel)}): ${property.hotels}
    <br><br>
    <button onclick="AddHouseToProperty(${gamer.index}, ${property.id});">AGREGAR CASA</button>
    <button onclick="AddHotelToProperty(${gamer.index}, ${property.id});">AGREGAR HOTEL</button>
    `;

    if(property.name.includes("aerolinea")){
        ShowPropertie(propertyId, gamer.name)
    }else{
        document.getElementById("modal-title").innerHTML = property.name.toUpperCase() + ` (<strong>${gamer.name.toUpperCase()}</strong>)`;
        document.getElementById("modal-body").innerHTML = body;
        document.getElementById("modal").style.display = "block";
    }
}

function AddHouseToProperty(gamerIndex, propertyId){
    let bank = gamers[0];
    let gamer = gamers[gamerIndex];
    let property = undefined;
    for(let i=0; i<gamer.properties.length; i++){
        if(gamer.properties[i].id == propertyId){
            property = gamer.properties[i];
        }
    }

    if(property!=undefined && property.houses<4 && gamer.money>=property.house){
        property.houses++;
        gamer.money -= property.house;
        bank.money += property.house;
        gamer.updateView();
        bank.updateView();

        let mssg = `${gamer.name} agrego una casa a ${property.name}`;
        let color = gamer.color;
        ShowTextInConsole(mssg, color);
    }else{
        let mssg = `${gamer.name}, no se pudo agregar la casa a tu propiedad`;
        let color = gamer.color;
        ShowTextInConsole(mssg, color);
    }
    CloseModal();
}

function AddHotelToProperty(gamerIndex, propertyId){
    let bank = gamers[0];
    let gamer = gamers[gamerIndex];
    let property = undefined;
    for(let i=0; i<gamer.properties.length; i++){
        if(gamer.properties[i].id == propertyId){
            property = gamer.properties[i];
        }
    }

    if(property!=undefined && property.houses==4 && property.hotels==0 && gamer.money>=property.hotel){
        property.hotels++;
        gamer.money -= property.hotel;
        bank.money += property.hotel;
        gamer.updateView();
        bank.updateView();

        let mssg = `${gamer.name} agrego un hotel a ${property.name}`;
        let color = gamer.color;
        ShowTextInConsole(mssg, color);
    }else{
        let mssg = `${gamer.name}, no se pudo agregar el hotel a tu propiedad`;
        let color = gamer.color;
        ShowTextInConsole(mssg, color);
    }
    CloseModal();
}

function ShowAirport(){
    document.getElementById("modal-title").innerHTML = "AEROPUERTO";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/airport.png" alt="AEROPUERTO" title="AEROPUERTO" width="160">
    <br>
    <p>
    ESTE ES TU PUNTO DE PARTIDA
    <br>
    NO OLVIDES COBRAR $10,000 CUANDO PASES POR AQUI
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowDeported(){
    document.getElementById("modal-title").innerHTML = "DEPORTADO";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/deportado.jpg" alt="DEPORTADO" title="DEPORTADO" width="160">
    <br>
    <p>
    HAS SIDO DEPORTADO COMO INMIGRANTE
    <br>
    POR NO LEGALIZARTE PAGA $1,500 AL BANCO
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowAustralia(){
    document.getElementById("modal-title").innerHTML = "AUSTRALIA";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/australia.jpg" alt="AUSTRALIA" title="AUSTRALIA" width="160">
    <br>
    <p>
    AUSTRALIA ES UN PARAISO
    <br>
    SOLO POR VISITARLA TE DAN $2,300
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowJail(){
    document.getElementById("modal-title").innerHTML = "CARCEL";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/carcel.png" alt="CARCEL" title="CARCEL" width="160">
    <br>
    <p>
    PERO QUE HICISTEEEE???
    <br>
    PAGA UNA MULTA DE $7,700
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowMssgs(){
    document.getElementById("modal-title").innerHTML = "MENSAJES SMS";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/sms.png" alt="SMS" title="SMS" width="160">
    <br>
    <p>
    SI LLEGAS A ESTA CASILLA
    <br>
    LEE UN NUEVO MENSAJE DE LA CASILLA DE MENSAJES
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowEmails(){
    document.getElementById("modal-title").innerHTML = "EMAILS";
    document.getElementById("modal-body").innerHTML = `
    <img src="img/email.jpg" alt="EMAILS" title="EMAILS" width="160">
    <br>
    <p>
    SI LLEGAS A ESTA CASILLA
    <br>
    LEE UN NUEVO EMAIL DE LA CASILLA DE EMAILS
    </p>
    `;
    document.getElementById("modal").style.display = "block";
}

function GetEmail(){
    document.getElementById("modal-title").innerHTML = "EMAIL";
    document.getElementById("modal-body").innerHTML = all_emails.emails[all_emails.order[all_emails.current]];
    document.getElementById("modal").style.display = "block";

    if(all_emails.current >= all_emails.emails.length-1){
        all_emails.current = 0;
    }else{
        all_emails.current++;
    }
}

function GetSms(){
    document.getElementById("modal-title").innerHTML = "SMS";
    document.getElementById("modal-body").innerHTML = all_messages.messages[all_messages.order[all_messages.current]];
    document.getElementById("modal").style.display = "block";

    if(all_messages.current >= all_messages.messages.length-1){
        all_messages.current = 0;
    }else{
        all_messages.current++;
    }
}

function FormAddGamer(){
    if(gamers.length < 7){
        let options = "";
        for(let i=0; i<ALL_COLORS.length; i++){
            if(ALL_COLORS[i].available){
                options += `<option value="${ALL_COLORS[i].color}">${ALL_COLORS[i].color.toUpperCase()}</option>`
            }
        }

        document.getElementById("modal-title").innerHTML = "NUEVO JUGADOR";
        document.getElementById("modal-body").innerHTML = `
        <input type="text" class="input-text" id="gamer-name" placeholder="NOMBRE" autocomplete="off" />
        <br>
        COLOR
        <br>
        <select id="gamer-color">
            ${options}
        </select>
        <br>
        <button onclick="AddGamer();">AGREGAR</button>
        <br>
        `;
        document.getElementById("modal").style.display = "block";
    }else{
        ShowTextInConsole("YA EXISTEN SEIS JUGADORES, NO PUEDES AGREGAR MAS");
    }
}

function AddGamer(){
    gamer_bank.money = gamer_bank.money - 75000;
    gamer_bank.updateView();

    let gamer = {
        id: "gamer" + gamers.length,
        index: gamers.length,
        name: document.getElementById("gamer-name").value,
        position: 1,
        money: 75000,
        properties: [],
        selectId: "gamer" + gamers.length + "-prop",
        color: document.getElementById("gamer-color").value,
        pointerId: `pointer-gamer${gamers.length}`,
        pointer: 
        `<div class="${document.getElementById("gamer-color").value}-pointer" id="pointer-gamer${gamers.length}">
            <img src="img/${document.getElementById("gamer-color").value}_pointer.png" alt="${document.getElementById("gamer-name").value}" title="${document.getElementById("gamer-name").value}">
        </div>`,
        updateView: ()=>{
            document.getElementById(gamer.index + "-money").innerHTML = "DINERO: " + formatter.format(gamer.money);
            document.getElementById(gamer.selectId).innerHTML = "";
            for (let i=0; i<gamer.properties.length; i++){
                let option = document.createElement("option");
                option.value = gamer.properties[i].box;
                option.text = gamer.properties[i].name.toUpperCase();
                document.getElementById(gamer.selectId).appendChild(option);
            }
        },
        showProperty: ()=>{
            let id = document.getElementById(gamer.selectId).value;
            if(id !== ""){
                ShowGamerPropertie(gamer.index, id);
            }else{
                let mssg = gamer.name + ", no tienes propiedades para mostrar";
                let color = gamer.color;
                ShowTextInConsole(mssg, color);
            }
        }
    }

    let panel = `
    <div class="gamer-${gamer.color}">
        <h4>${gamer.name}</h4>
        <div class="${gamer.color}-pointer pointer-game">
            <img src="img/${gamer.color}_pointer.png" alt="">
        </div>
        <div class="properties">
            <div id="${gamer.index + "-money"}">DINERO: ${formatter.format(gamer.money)}</div>
            <br>
            PROPIEDADES:
            <br>
            <select name="${gamer.selectId}" id="${gamer.selectId}">
                <option value="" disabled>Seleccionar</option>
            </select>
            <button onclick="gamers[${gamers.length}].showProperty();">MOSTRAR</button>
        </div>
    </div>
    `;
    let panel_gamers = document.getElementById("gamers-panel");
    panel_gamers.innerHTML += panel;
    gamer.setPointer = () => {
        let box = document.getElementById("posc" + gamer.position);
        box.innerHTML = box.innerHTML + gamer.pointer;
    }

    for(let i=0; i<ALL_COLORS.length; i++){
        if(ALL_COLORS[i].color == gamer.color){
            ALL_COLORS[i].available = false;
        }
    }

    gamer.setPointer();
    gamers.push(gamer);
    player_turns.turns.push(gamer.id);

    CloseModal();
}

function StartGame(){
    if(gamers.length < 3){
        ShowTextInConsole("SE NECESITAN DOS O MAS JUGADORES PARA INICIAR EL JUEGO");
    }else{
        let buttons = document.getElementsByTagName("button");
        for(let i=0; i<buttons.length; i++){
            buttons[i].disabled = false;
        }

        let gamer = gamers[player_turns.current];
        let mssg = "ES EL TURNO DE " + gamer.name.toUpperCase();
        let color = gamer.color;
        ShowTextInConsole(mssg, color);
    }
}

function UpdateTurns(){
    if(player_turns.current == gamers.length-1){
        player_turns.current = 1;
    }else{
        player_turns.current++;
    }
}

function ThrowDice(){
    // box93, box95
    let dice1 = getRandomInt(1, 6);
    let dice2 = getRandomInt(1, 6);
    let total = dice1 + dice2;
    document.getElementById("box93").innerHTML = dice1;
    document.getElementById("box95").innerHTML = dice2;

    if(gamers.length < 2){
        ShowTextInConsole("SE NECESITAN DOS O MAS JUGADORES");
    }else{
        let gamer = gamers[player_turns.current];

        let new_pos = 0;
        if(gamer.position+total > 40){
            new_pos = gamer.position + total - 40;
        }else{
            new_pos = gamer.position + total;
        }

        let mssg = gamer.name + " obtuvo " + total;
        let color = gamer.color;
        let boxId = document.getElementById("posc" + new_pos).parentNode.id;
        if(boxId == "box111"){
            mssg += ` y llego al aeropuerto`;
        }else if(boxId == "box121"){
            mssg += ` y llego a deportados`;
        }else if(boxId == "box11"){
            mssg += ` y llego a australia`;
        }else if(boxId == "box1"){
            mssg += ` y llego a la carcel`;
        }else if(boxId=="box113" || boxId=="box88" || boxId=="box4" || boxId=="box34"){
            mssg += ` y recibio un email`;
        }else if(boxId=="box118" || boxId=="box33" || boxId=="box9" || boxId=="box78"){
            mssg += ` y recibio un sms`;
        }else{
            for(let i=0; i<properties.length; i++){
                if(properties[i].box == boxId){
                    mssg += ` y llego a ${properties[i].name}`;
                }
            }
        }

        ShowTextInConsole(mssg, color);
        MoveGamer(gamer, total);
        UpdateTurns();
    }
}

function ShowBuySell(){
    let options = "";
    for(let i=0; i<gamers.length; i++){
        let option = `<option value="${gamers[i].index}">${gamers[i].name}</option>`;
        options += option;
    }

    document.getElementById("modal-title").innerHTML = "COMPRA / VENTA";
    document.getElementById("modal-body").innerHTML = `
    <div class="div-shopper">
        <div>COMPRADOR: </div>
        <select name="select-shopper" id="select-shopper" onchange="ShowShopperMoney(this.value, 'shopper-money')">
            <option value="" disabled selected>Seleccionar</option>
            ${options}
        </select>
        <br><br>
        <strong><div id="shopper-money">Efectivo: $</div></strong>
    </div>
    <div class="div-vendor">
        VENDEDOR:
        <br>
        <select name="select-vendor" id="select-vendor" onchange="LoadVendorProperties(this.value, 'select-vendor-properties')">
            <option value="" disabled selected>Seleccionar</option>
            ${options}
        </select>
        <br><br>
        PROPIEDAD:
        <select name="select-vendor-properties" id="select-vendor-properties">
        </select>
    </div>
    <button onclick="MakeBuySell();">COMPRAR</button>
    `;
    document.getElementById("modal").style.display = "block";
}

function ShowPaymentWindow(){
    let options = "";
    for(let i=0; i<gamers.length; i++){
        let option = `<option value="${gamers[i].index}">${gamers[i].name}</option>`;
        options += option;
    }

    document.getElementById("modal-title").innerHTML = "PAGAR";
    document.getElementById("modal-body").innerHTML = `
    <div class="div-shopper">
        <div>Paga: </div>
        <select name="select-payer" id="select-payer" onchange="ShowPayerMoney(this.value, 'payer-money')">
            <option value="" disabled selected>Seleccionar</option>
            ${options}
        </select>
        <br><br>
        <strong><div id="payer-money">Efectivo: $</div></strong>
    </div>
    <div class="div-vendor">
        Cobra:
        <br>
        <select name="select-collector" id="select-collector">
            <option value="" disabled selected>Seleccionar</option>
            ${options}
        </select>
    </div>
    <input type="text" class="input-amount" name="amount-to-pay" id="amount-to-pay" placeholder="MONTO ($)" autocomplete="off" onkeypress="return justNumbers(event);">
    <button onclick="MakePayment();">PAGAR</button>
    `;
    document.getElementById("modal").style.display = "block";
}

function MakePayment(){
    let payer = gamers[document.getElementById("select-payer").value];
    let collector = gamers[document.getElementById("select-collector").value];
    let amount = undefined;
    let mssg = "";
    let color = payer.color;
    
    if(document.getElementById("amount-to-pay").value == ""){
        amount = 0;
    }else{
        amount = parseInt(document.getElementById("amount-to-pay").value);
    }

    if(payer.money >= amount){
        payer.money -= amount;
        collector.money += amount;
        payer.updateView();
        collector.updateView();
        mssg = `${payer.name} pago ${formatter.format(amount)} a ${collector.name}`;
    }else{
        mssg = `${payer.name} no tiene dinero suficiente para pagar a ${collector.name}`;
    }

    ShowTextInConsole(mssg, color)
    CloseModal();
}

function MakeBuySell(){
    let shopper = gamers[document.getElementById("select-shopper").value];
    let vendor = gamers[document.getElementById("select-vendor").value];
    let property = undefined;
    for(let i=0; i<properties.length; i++){
        if(properties[i].box === "box"+document.getElementById("select-vendor-properties").value){
            property = properties[i];
        }
    }

    if(shopper===undefined || vendor===undefined || property===undefined){
        ShowTextInConsole("Seleccione correctamente comprador, vendedor y propiedad");
    }else{
        if(shopper.money >= property.price){
            property.proprietary = shopper.name
            // shop
            vendor.money += property.price;
            shopper.money -= property.price;
            // add property
            shopper.properties.push(Object.assign({}, property));
            // remove property
            let index = 0;
            for(let j=0; j<vendor.properties.length; j++){
                if(vendor.properties[j].box === property.box){
                    index = j;
                    break;
                }
            }
            vendor.properties.splice(index, 1);

            let mssg = shopper.name + " compro " + property.name + " a " + vendor.name;
            let color = shopper.color;
            ShowTextInConsole(mssg, color);
        }else{
            let mssg = `${shopper.name} no tiene dinero suficiente para comprar ${property.name}`;
            let color = shopper.color;
            ShowTextInConsole(mssg, color);
        }
    }
    
    shopper.updateView();
    vendor.updateView();
    CloseModal();
}

function ShowShopperMoney(shopperIndex, divId){
    document.getElementById(divId).innerHTML = "Efectivo: " + formatter.format(gamers[shopperIndex].money);
}

function ShowPayerMoney(payerIndex, divId){
    document.getElementById(divId).innerHTML = "Efectivo: " + formatter.format(gamers[payerIndex].money);
}

function LoadVendorProperties(vendorIndex, selectVendorProperties){
    if(gamers[vendorIndex].properties.length > 0){
        let options = ""
        for(let i=0; i<gamers[vendorIndex].properties.length; i++){
            let option = `<option value="${gamers[vendorIndex].properties[i].id}">
            ${gamers[vendorIndex].properties[i].name.toUpperCase()} - ${formatter.format(gamers[vendorIndex].properties[i].price)}
            </option>`;
            options += option;
        }
        document.getElementById(selectVendorProperties).innerHTML = options;
    }else{
        let mssg = gamers[vendorIndex].name + " no tiene propiedades para vender";
        let color = gamers[vendorIndex].color;
        ShowTextInConsole(mssg, color);
    }
}

function MoveGamer(gamer, boxes){
    let pointer_id = gamer.pointerId;
    removeElementById(pointer_id);

    if(gamer.position+boxes > 40){
        let surplus = gamer.position + boxes - 40;
        gamer.position = surplus;
    }else{
        gamer.position += boxes;
    }

    let next_pos = document.getElementById("posc" + gamer.position);
    next_pos.innerHTML += gamer.pointer;

    NotifyQwnerByConsole(next_pos, gamer);
}

function NotifyQwnerByConsole(position, gamer){
    let box = position.parentNode;
    let property = undefined;
    
    for(let i=0; i<properties.length; i++){
        if(properties[i].box == box.id){
            property = properties[i];
        }
    }

    if(property != undefined){
        if(property.proprietary!="gamer_bank" && property.proprietary!="BANCO"){
            let mssg = `${gamer.name} llego a una propiedad de ${property.proprietary}`;
            ShowTextInConsole(mssg, "white");
        }
    }
}

function FinishGame(){
    if(gamers.length > 2){
        let score = [];
        for(let i=1; i<gamers.length; i++){
            let gamer = gamers[i];
            let total = gamer.money;
            for(let j=0; j<gamer.properties.length; j++){
                total += gamer.properties[j].price;
            }
            let obj = {
                name: gamer.name,
                color: gamer.color,
                total: total
            };
            score.push(obj);
        }
        score.sort((a,b) => b.total - a.total);

        document.getElementById("modal-title").innerHTML = "SCORE FINAL";
        document.getElementById("modal-body").innerHTML = "";
        for(let i=0; i<score.length; i++){
            document.getElementById("modal-body").innerHTML += `
            <div style="color: ${score[i].color};">
            <strong>Lugar ${i+1}: ${score[i].name.toUpperCase()} - ${formatter.format(score[i].total)}</strong>
            </div>
            <br>
            `;
        }
        document.getElementById("modal").style.display = "block";
        FINISH = true;
    }
}
