$(document).ready(function(){
    $("#next").click(function(){
        var email = $("#email").val();
        localStorage.setItem("userEmail", email);
        window.location.href = "signinpassword.html";
    });
});
$(document).ready(function()
{
    var email= localStorage.getItem("userEmail");
    if(email)
    {
        $("#emailspace").html(email + ' <span><a href="#">Change</a></span>'); 
    }
    else {
        $("#emailspace").html("email <span><a href='#'>Change</a></span>"); 
    }
});
$(document).ready(function(){
    $("#sign").click(function()
{
    window.location.href= "index.html";
});
});