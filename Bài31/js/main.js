$(document).ready(function () {
    $('button').click(function (e) {
        var d = new Date();
        str2 = d.getHours()+":"+d.getMinutes()+"\t"+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
        str1 = $('input').val();
        $('div').append('<p>'+str1+' - <i>'+str2+'</i></p>')
        e.preventDefault();
    });
});