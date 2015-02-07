$(document).ready(function() {	

		$('.dontcode').click(function (){
		var nocode = "null";
		$('.code').val(nocode)
		$('.agentcode').hide()
		})
	// Moving to a Next Step
	$('.next1').click(function (){
		var username = $('.nameinput').val()
		var mobile = $('.mobile').val()
		var pass = $('#login_input_password').val()
		var passre = $('.passre').val()
		var email = $('.emailinput').val()
		
		if(username == ""){
			$('.nameinput').hide().show()
		}else if(mobile == ""){
			$('.mobile').hide().show()
		}else if(pass == ""){
			$('.pass').hide().show()
		}else if(passre == ""){
			$('.passre').hide().show()
		}else if(email == ""){
			$('.emailinput').hide().show()
		}else if(pass == passre){
				$('.reg1').hide()
				$('.reg2').show()
				$('.heading').html("Let's set up your Card Details")
				
		}else{
			alert("Password DONT Match")	
		}
	})
	
	// Check Second Reg
	$('.next2').click(function (){
		var firstname = $('.firstName').val()
		var lastname = $('.lastName').val()			
		var birth = $('.birth').val()		
		var date = $('.date').val()
		
		if(firstname == ""){
			$('.firstName').hide().show()			
		}else if(lastname == ""){
			$('.lastName').hide().show()			
		}else if(birth == ""){
			$('.birth').hide().show()			
		}else if(date = ""){
			$('.date').hide().show()			
		}else{
			$('.reg2').hide()
			$('.reg3').show()
			$('.heading').html("Almost Done! Let's set up your Academic Info")			
		}
	})
	
	$('.next3').click(function (){	
	
		var college = $('.college').val()
		var year = $('.year').val()
		var level = $('.level').val()
		
		if(college == "default"){
			$('.college').hide().show('shake')
		}else if(year == "default"){
			$('.year').hide().show('shake')
		} else if(level == "default"){
			$('.level').hide().show('shake')
		}else{
			$('.reg3').hide()
			$('.reg4').show()
			$('.res').html("Almost there!! You can choose to upload later!!!")	
			$('.image').hide()
			$('.imageid').hide()
			$(".opt").hide()
			$('.heading').html("Almost there!! You can choose to upload later!!!")
		}
	})
	
	$('.next4').click(function (){
		var id = $('.imageid').val()
		var scan = $('.image').val()
		
		if(id == ""){
			$('.birth').hide().show()			
		}else if(scan == ""){
			$('.birth').hide().show()			
		}else{
			$('.reg3').hide()
			$('.reg4').show()
		}
		})
		
				$('.emailinput').bind('keyup', function (){
		var value = $(this).val()
		if(value == ""){
			$('.emailchoice').html("Enter Email")
		}else{
			$.post('http://www.campuslifetz.com/campus/clc/php/check-email.php', {'email' : value}, function (data){ 
				$('.emailchoice').html(data)
			 })
		}
		})
		
 	$(".login_input").keydown(function(event) {
        if (event.keyCode == 32) {
            event.preventDefault();
        }
    });
	
	Array.prototype.indexOf = Array.prototype.indexOf || function (searchElement) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
}

document.querySelector('.login_input').onkeypress = validate;

function validate(e) {
            e = e || event;
            return /[a-z0-9]/i.test(String.fromCharCode(e.charCode || e.keyCode)) 
                    || !!(!e.charCode && ~[8,37,39,46].indexOf(e.keyCode));
}

  //called when key is pressed in textbox
  $(".mobile").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $(".mobilere").html("Digits Only").show().fadeOut("slow");
               return false;
    }
});

$('#signup').submit(function() {
    validateEmail($('input').val());
    return false;
});

$('.emailinput').keyup(function (){
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@c-e.com', email.length - '@c-e.com'.length) !== -1) {
            alert('Submission was successful.');
        } else {
            alert('Email must be a CE e-mail address (your.name@c-e.com).');
        }
    } else {
        alert('Not a valid e-mail address.');
    }
})


	$(':input').bind("cut copy paste",function(e) {
			  e.preventDefault();
	});
	  
	  	
	$.post('http://www.campuslifetz.com/campus/clc/php/get-colleges.php', function (data){
		$('.college').html(data)
		})
		
		$(".college").bind("change", function (){
		var col = $(".college").val()
		if(col == "Overseas"){
			$(".opt").show()
			$(".country").val("")
		}else{
			$(".country").val("Tanzania")
			$(".opt").hide()
		}
		})
		
		
	$.post('http://www.campuslifetz.com/campus/clc/php/get-networks.php', function (data){
		$('.network').html(data)
	})
		
	$.post('http://www.campuslifetz.com/campus/clc/php/get-levels.php', function (data){
		$('.level').html(data)
		})

$('.usesample1').click(function (){
			$(this).hide()
			var image = "sample.png";
			$('.image').val(image)
			
			$('.passre').html("Successfully Added")
		})
		
		$('.usesample2').click(function (){
			$(this).hide()
			var image = "sample.png";
			$('.imageid').val(image)

			$('.idre').html("Successfully Added")
		})
		
		
	$('.back1').click(function (){
		$('.reg2').hide()
		$('.reg1').show()
		$('.heading').html("Confirm Your Details --> Press Continue")
	})
	
	$('.back2').click(function (){
		$('.reg3').hide()
		$('.reg2').show()
	})
	
	$('.back3').click(function (){
		$('.reg4').hide()
		$('.reg3').show()
	})
	
	$('#registeruser').submit(function (){
		$('#registeruser').hide()
		$('.send').html("Sending Details to the Server ......")
		$.post('http://www.campuslifetz.com/campus/clc/php/apply-card.php', $('#registeruser').serialize(), function (data){
			$('.send').html(data)
			$('.heading').html(data)
		}).fail(function (){
			$('.send').html(data)
			$('.heading').html("Failed to Register your Detials!!!! Close and Try Agian!!!")
			})	
		
		
		
		return false;
	})

		
	$('.request').click(function (){
		var user = $('.regname').val()
		if(user == ""){
			$(".checkres").hide().show("bounce").html("Enter username in the Box")
		}else{
			$('.checkres').html("Requesting ....")
			$.post('http://www.campuslifetz.com/campus/clc/php/become-agent.php', {'user':user}, function (data){
			$('.checkres').html(data).delay(5000).hide('drop')
			})
		}
		})
		
		// Checking If Username is available or not
	$('.nameinput').bind('keyup', function (){
		var value = $(this).val()
		if(value == ""){
			$('.choice').html("Enter Username")
		}else{
			$.post('http://www.campuslifetz.com/campus/clc/php/check-username.php', {'username' : value}, function (data){ 
				$('.choice').html(data)
			 })
		}
	})
		
	$('.view').click(function (){
		var code = $(".ambcode").val()
		if(code == ""){
			$(".resview").html("Enter Your Code in the Box")
		}else{
			$(".resview").html("Fetching records ....")
			$.post("http://www.campuslifetz.com/campus/clc/php/viewprogress.php", {"code":code}, function (data){
			$(".resview").html(data)
			})
		}
		})
});
