$(document).ready(function () {
    str = "";
    $('button').click(function (e) {
        str = "";
        var temp = $("input[name='select']");
        $.each(temp,function(index,val){
            if($(val).is(":checked")){
                str+=$(val).val()+"=yes,";
            }       
        });
        str+='width='+$('#width').val()+','+'height='+$('#height').val();
        window.open('https://'+$('input').eq(0).val(),"_blank",str);
        e.preventDefault();       
    });
});