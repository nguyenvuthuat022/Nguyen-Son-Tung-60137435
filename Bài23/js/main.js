$(document).ready(function () {
    $('a').click(function (e) {
        var a = confirm("Are you sure want to goto that page?");
        if(a){
            assign();
        }
        e.preventDefault();
    });
});
