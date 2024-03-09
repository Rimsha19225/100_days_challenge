
//Qestion 01
let transport=['aeroplain',' car', ' motor bike', ' train', ' cycle', ' bus'];
transport.forEach(transport=>{
    console.log('that some popular vichale '+transport, 'i like that');
});

//Qestion 02
let guestList=['rabia','anabia','rahila','robina'];
guestList.forEach(guest =>{
    console.log('dear '+ guestList,'i am invite to all and enjoy your day.')
});

//Qestion 03
let noAttand="robina";
console.log(noAttand,+' invitation are cancel so i will inform before.');
//change guest list
let updateGuest="fabia";
guestList[guestList.indexOf(noAttand)]=updateGuest;
//again invitation
guestList.forEach(guest =>{
    console.log('dear '+guest, 'i wish to attend all to make memories with using.')
});