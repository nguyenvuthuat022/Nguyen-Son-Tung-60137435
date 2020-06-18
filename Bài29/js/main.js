$(document).ready(function () {
    user = "";
    pass = "";
    rePass = "";
    $('button').click(function (e) {
        $('#user').css('background','white');
        $('#pass').css('background','white');
        $('#rePass').css('background','white');
        user = $('#user').val();
        pass = $('#pass').val();
        rePass = $('#rePass').val();
        if(user.length <= 6){
            alert("Tên đăng nhập dài hơn 6 kí tự");
            $('#user').css('background','yellow');
        }
        else if(pass=='' || rePass==''){
            alert("Chưa điền đầy đủ thông tin");
            if(pass=='' && rePass==''){
                $('#pass').css('background','yellow');
                $('#rePass').css('background','yellow');
            }
            else if(rePass==''){
                $('#rePass').css('background','yellow');
            }
            else{
                $('#pass').css('background','yellow');
            }
        }
        else if(pass !== rePass){
            alert("Nhập lại mật khẩu chưa đúng");
            $('#rePass').css('background','yellow');
        }
        else{
            $('#user').css('background','white');
            $('#pass').css('background','white');
            $('#rePass').css('background','white');
        }
        e.preventDefault();
    });
});