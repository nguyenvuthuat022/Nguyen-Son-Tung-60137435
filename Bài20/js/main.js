$(document).ready(function () {
    $('input').click(function (e) {     
        alert($(this).val());
        $(this).atrr('checked','true');
        e.preventDefault();  
    });
});
