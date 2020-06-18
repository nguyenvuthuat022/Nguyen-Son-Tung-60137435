$(document).ready(function () {
    $('button').click(function (e) { 
        x= $(e.target).text();
        a = Number($('#a').val());
        b = Number($('#b').val());
        kq = $('#kq');
        switch(x){
            case '+': kq.val(a+b) ; break;
            case '-': kq.val(a-b) ; break;
            case '*': kq.val(a*b) ; break;
            case '/': kq.val(a/b) ; break;
            case '^': kq.val(Math.pow(a,b)) ; break;
        }           
        e.preventDefault();
    });
});
