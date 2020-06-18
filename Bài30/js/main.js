$(document).ready(function () {
    flag = true;
    $('button').click(function (e) {
        if(flag){
            $('input').attr('type','text');
            $(this).text("Click để hiện Password");
            $('legend').text("Hiển thị password");
        }else{
            $('input').attr('type','Password');
            $(this).text("Click để ẩn Password");
            $('legend').text("Nhập password");
        }
        flag=!flag;
        e.preventDefault();
        
    });
});