
//Qestion 01
let invitationForGuest=['rim','mishooo','rehan','zobia','fadi','rohit','zahid','saim','qasim','wajid','warda','kulsoom','tahir','laiba','bano','hanain','ubaid','rohi','emaan']
console.log("great news! I found a bigger dinner table");
invitationForGuest.forEach(invitationForGuest =>{
    console.log('dear '+ invitationForGuest,'would you like to join me for dinner?')
});

//Qestion 02
console.log("unfortunatly, I can only invite two people for dinner.");
while (invitationForGuest.length > 2){
    let removedGuest=invitationForGuest.pop();
    console.log('sorry ' +removedGuest, "I can't invite you for dinner");
}
invitationForGuest.forEach(invitationForGuest=>{
    console.log('dear ' +invitationForGuest, 'you are still invited to dinner');
});
invitationForGuest.splice(0,invitationForGuest.length);
console.log(invitationForGuest);

//Qestion 03
let place=['saudia','india','turki','usa','china'];
console.log('original order',place);
console.log('alphabetical order',[...place].sort());
console.log('original order',place);
console.log('reverse order',[...place].reverse());
console.log('original order',place);
place.reverse();
console.log('reversed order',place);
place.reverse();
console.log('original order',place);
place.sort();
console.log('alphabetical order',place);
place.reverse();
console.log('alphabetical reverse order',place);