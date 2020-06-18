$(document).ready(function () {
    function updateTime(){
        let d = new Date();
        let hour ="Bây giờ là "+ d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
        $("#clock").html(hour);
    }
    updateTime();
    setInterval(updateTime,1000);
});