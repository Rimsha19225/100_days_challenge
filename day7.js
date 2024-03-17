//Qestion 01
var invitation = ['rim', 'mishooo', 'rehan', 'zobia', 'fadi', 'rohit', 'zahid', 'saim', 'qasim', 'wajid', 'warda', 'kulsoom', 'tahir', 'laiba', 'bano', 'hanain', 'ubaid', 'rohi', 'emaan'];
console.log('i am inviting ' + invitation.length + ' people to dinner');
invitation.forEach(function (invitation) {
    console.log(invitation);
});
//Qestion 02
var places = ['saudia', 'india', 'turki', 'usa', 'china'];
places.forEach(function (places) {
    console.log("i don't like to visit " + places);
});
//Qestion 03
var notebook = {
    title: 'rimsha',
    author: 'xyz',
    publisedYear: 1999
};
console.log('book information ' + notebook.title + ' by ' + notebook.author + ' published in ' + notebook.publisedYear);
