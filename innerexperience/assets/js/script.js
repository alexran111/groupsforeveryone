function menu() {
	$(".menu,.nav .home,.nav .about,.nav .groups,.nav .contact ").click(function(){
		$(".nav-section").toggleClass("show");
		$(".menu .nav-bar:nth(0)").toggleClass("animate-0");
		$(".menu .nav-bar:nth(1)").toggleClass("animate-1");
		$(".menu .nav-bar:nth(2)").toggleClass("animate-2");
	});
	var offset = $(".menu").offset();
	var topPadding = 50;
	$(window).scroll(function() {
		if(this.innerWidth > 1100) {$(".menu").stop().animate({
		    marginTop: $(window).scrollTop() - offset.top + topPadding
		});
		} else {
		$(".menu").stop().animate({
		    marginTop: 0 
		});
	};
	}); 
	$('.scroll').smoothScroll();
}


function backstretch() { // used for fulldiv backgrounds
	$(".bp-post").backstretch("assets/img/asilomar.jpg");
	$(".bp-post.two").backstretch("assets/img/collegestudentcircle.jpg");
	$(".portfolio-img.one").backstretch("assets/img/adolescents.jpg");
	$(".portfolio-img.two").backstretch("assets/img/parenting.jpg");
	$(".portfolio-img.three").backstretch("assets/img/supportgroup.jpg");
	$(".portfolio-img.four").backstretch("assets/img/anger.jpg");
	$(".portfolio-img.five").backstretch("assets/img/collegestudentcircle.jpg");
	$(".portfolio-img.six").backstretch("assets/img/sadwoman.jpg");
    $(window).resize(function () {
	$(".bp-post").backstretch("assets/img/asilomar.jpg");
	$(".bp-post.two").backstretch("assets/img/collegestudentcircle.jpg");
	$(".portfolio-img.one").backstretch("assets/img/adolescents.jpg");
	$(".portfolio-img.two").backstretch("assets/img/parenting.jpg");
	$(".portfolio-img.three").backstretch("assets/img/supportgroup.jpg");
	$(".portfolio-img.four").backstretch("assets/img/anger.jpg");
	$(".portfolio-img.five").backstretch("assets/img/collegestudentcircle.jpg");
	$(".portfolio-img.six").backstretch("assets/img/sadwoman.jpg");
    });
}

function slider() {
	$('#slider').flexslider({
		animation: "slide"
	});
}

function panels() {
	// work panels
	var portMap = {articles : '#articles-panel'};  //  links : '#links-panel', 
    $('#links, #articles').on('click', function() {
    	var pId = portMap[this.id]; //'.panel .work '+ portMap[this.id];
    	$("body").addClass("no-scroll");
        $('.panel').animate({
            'width': 'show'
        }, 1000, function() {
            $(pId).fadeIn(500);
        });
    });
    $('.closeicon').on('click', function() {
        $('.panel .work').fadeOut(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel').animate({
                'width': 'hide'
            }, 1000);
        });
    });
}

function blogposts() { // only use if span is at the end of the row 
	$("#approach").click(function(){
		$("#approach-item").toggleClass("reveal");
	});
	$("#appointments").click(function(){
		$("#appointments-item").toggleClass("reveal");
	});
	$("#resources").click(function(){
		$("#resources-item").toggleClass("reveal");
	});  
}

function contentslider() {
	$('#content').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false
	});
}

$("#contactForm").validate({submitHandler: function (form) {
	var $form = $(form);
	$form.children('input').disable();
    $.ajax( {
        type: 'POST',
        url: 'formmail.php',
        data: $form.serialize(), 
        success: function(response) {
        	//$form.children('input').val('');
        	alert(response);
        }
    } );
}
});

function map() {
	new GMaps({
		div: '#map',
		lat: 37.37,
		lng: -122.10,
		scrollwheel: false
	});
}