function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  $(document).ready(function(){
    $("#next").click(function(){
        if(isEmail($("#email").val()) == false)
        {
            $("#errormessage").html("<em><strong>!  </strong></em> Wrong or Invalid email address or mobile phone number. Please correct and try again.");
            $("#email").css({"box-shadow" : "0px 0px 2px 2px rgb(231, 173, 173)", "border" : "2px solid red"});
        }
        else{
            var email = $("#email").val();
        localStorage.setItem("userEmail", email);
        window.location.href = "signinpassword.html";
        }
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

$(document).ready(function()
{
    $("#sign").click(function()
        {
            if($("#pass").val()== "")
            {
                $("#error").html("<em><strong>! </strong><em>Please enter the password first.");
                $("#error").css({"font-size": "12px","line-height": "1.5", "color": "rgb(192, 3, 3)",
    "margin-left": "15px"});
            }
            else{
                window.location.href= "index.html";
            }
        }
    );
});