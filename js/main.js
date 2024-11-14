
// Page Loader : hide loader when all are loaded
$(window).load(function(){
	"use strict";
    $('#page-loader').addClass('hidden');
});


/* 3. Init all plugin on document load */
$(document).ready(function() {
	"use strict";

/* Slide Background variables */
var isSlide = false;
var slideElem = $('.slide');
var arrowElem = $('.p-footer .arrow-d');
var pageElem = $('.page');	
	
// auto typer typed	
    if ($.isFunction($.fn.typed)) {
        $(".aris-meta > h3 span").typed({
            strings: ["Front-end Developer", "Web Designer"],
            loop: true,
            startDelay: 1e3,
            backDelay: 3e3,
            typeSpeed: 30
        });
    }

//------ scrollbar plugin
	if ($.isFunction($.fn.perfectScrollbar)) {
		$('.our-work, .detail-meta').perfectScrollbar();
	}
	
// --- youtube video background	
	if ($.isFunction($.fn.YTPlayer)) {	
		jQuery("#bg-youtube").YTPlayer();
	}
	
	
/** Init fullpage.js */
    $('#mainpage').fullpage({
		menu: '#qmenu',
		anchors: ['home', 'about-us', 'services', 'portfolio', 'blog', 'contact'],
    	verticalCentered: true,
    	resize : false,
		responsive: 900,
		scrollOverflow: true,
        css3: false,
        navigation: true,
		onLeave: function(index, nextIndex, direction){
			arrowElem.addClass('gone');
			pageElem.addClass('transition');
			$('.active').removeClass('transition');
			slideElem.removeClass('transition');
			isSlide = false;
		},
        afterLoad: function(anchorLink, index){
			arrowElem.removeClass('gone');
			pageElem.removeClass('transition');
			if(isSlide){
				slideElem.removeClass('transition');
			}
		},
		
        afterRender: function(){}
    });

	
});//document .ready end here

