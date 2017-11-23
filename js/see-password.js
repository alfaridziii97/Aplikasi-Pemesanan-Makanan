$("#password").on("keyup",function(){
    if($(this).val())
        $(".glyphicon-eye-open").show();
    else
        $(".glyphicon-eye-open").hide();
    });

$(".glyphicon-eye-open").mousedown(function(){
                $("#password").attr('type','text');
            }).mouseup(function(){
                $("#password").attr('type','password');
            }).mouseout(function(){
                $("#password").attr('type','password');
            });