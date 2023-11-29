"use strict";

window.onload = ()=>{
    // for(let i=1; i<=121; i++){
    //     if(i%11===1 || i%11===0 || i===110 || (i>=2 && i<=10) || (i>=112 && i<=120)){
    //         document.getElementById("box"+i).style.background = "#ccc";
    //     }
    // }

    // edit img tags
    let images = document.getElementsByTagName("img");
    for(let i=0; i<images.length; i++){
        images[i].alt = images[i].alt.toUpperCase();
        images[i].title = images[i].title.toUpperCase();
        images[i].style.cursor = "pointer";
    }

    // set mssgs random
    let rnd_mssgs = [];
    for(let i=0; i<all_messages.messages.length; i++){
        rnd_mssgs.push(i);
    }
    let rnd_order = [];
    while(rnd_mssgs.length > 0){
        let index = getRandomInt(0, rnd_mssgs.length);
        rnd_order.push(rnd_mssgs[index]);
        rnd_mssgs.splice(index, 1);
    }
    rnd_order = rnd_order.filter(function( element ) {
        return element !== undefined;
    });
    all_messages.order = rnd_order;
    
    // set emails random
    let rnd_emails = [];
    for(let i=0; i<all_emails.emails.length; i++){
        rnd_emails.push(i);
    }
    let emails_order = [];
    while(rnd_emails.length > 0){
        let index = getRandomInt(0, rnd_emails.length);
        emails_order.push(rnd_emails[index]);
        rnd_emails.splice(index, 1);
    }
    emails_order = emails_order.filter(function(element){
        return element !== undefined;
    });
    all_emails.order = emails_order;

    // set proprietary bank to all properties
    for(let i=0; i<properties.length; i++){
        properties[i].proprietary = gamer_bank.id;
    }

    // edit gamer bank
    gamer_bank.money = 1000000;
    gamer_bank.properties = [...properties];
    gamer_bank.updateView();
    // gamer bank to gamers
    gamers.push(gamer_bank);

    // hide modal
    document.getElementById("modal-loader").style.display = "none";
    
    // console.log(all_messages);
    // console.log(all_emails);
    // console.log(properties);
    // console.log(gamer_bank);
    // console.log(gamers);
    // console.log(player_turns);
}
