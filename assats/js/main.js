(function($){

	"use strict";

	jQuery(document).ready(function($){

		$('.manulist').slicknav({
			'prependTo': '.mabile-manu',
		});
     // carousel js
			$(".stady-parrant-carousel").owlCarousel({
			    loop:true,
			    margin:20,
			    items:3,
			    dots:true,
			    nav:false,
			    stagePadding: Number,
			    navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:1,
			        },
			        750:{
			            items:2,
			        },
			        1000:{
			            items:3,
			        }
			    },
				 
			});
		// carousel js
			$(".logo-parant-carousel").owlCarousel({
			    loop:true,
			    margin:20,
			    items:6,
			    dots:true,
			    nav:false,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:3,
			        },
			        600:{
			            items:4,
			        },
			        1000:{
			            items:6,
			        }
			    }
			});

		//smooth scroll	
		$('a').on('click', function(event){

			if(this.hash !== ""){
				event.preventDefault();
				var hash = this.hash;

				$('body, html').animate({

					scrollTop: $(hash).offset().top
				},900, function(){
					window.location.hash = hash;
				});
			}


		});

	});


	jQuery(window).load(function(){});

 }(jQuery));