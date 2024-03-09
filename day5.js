//Qestion 01
var transport = ['aeroplain', ' car', ' motor bike', ' train', ' cycle', ' bus'];
transport.forEach(function (transport) {
    console.log('that some popular vichale ' + transport, 'are travel around the whole world');
});
//Qestion 02
var guestList = ['rabia', 'anabia', 'rahila', 'robina'];
guestList.forEach(function (guest) {
    console.log('dear ' + guestList, 'i am invite to all and enjoy your day.');
});
//Qestion 03
var noAttand = "robina";
console.log(noAttand, +' invitation are cancel so i will inform before.');
//change guest list
var updateGuest = "fabia";
guestList[guestList.indexOf(noAttand)] = updateGuest;
//again invitation
guestList.forEach(function (guest) {
    console.log('dear ' + guest, 'i wish to attend all to make memories with using.');
});
