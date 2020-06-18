$(document).ready(function () {
    var d = new Date();
    console.log(d);
    var str = "Hôm nay, Ngày "+d.getDate()+" Tháng "+(d.getMonth()+1)+" Năm "+d.getFullYear();
    $('body').html('<p>'+str+'</p>');
});