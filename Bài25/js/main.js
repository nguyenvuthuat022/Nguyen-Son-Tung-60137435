$(document).ready(function () {
    var d = new Date();
    for(let i=1950; i<=d.getFullYear();i++){
        $('select').append('<option>'+i+'</option>');
    }
});