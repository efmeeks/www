// JavaScript Document

		
// Declare year for footer
   var tomorrow = new Date();
		document.getElementById("spanDate").innerHTML = tomorrow.getFullYear();
				
// Back to top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
			"use strict";
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
		"use strict";
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
		"use strict";
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// Form Script
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
	var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "process.php",
        data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Thank you for contacting Blake Bailey." + "Your inquiry was received and we will be in touch shortly.")
	$('#contactForm').hide();
}

function formError(){
    $("#contactForm").removeClass().addClass('bounceInLeft animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h2 bounceInLeft animated";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
