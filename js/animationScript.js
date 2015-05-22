// Credit to 
// http://codepen.io/AdelDima/pen/ueKrI
function animateProgressCirles() {
	$('.dial').each(function() {
		var elm = $(this);
		elm.css('visibility', 'visible');
	});
	$('.dial').each(function () { 

		var elm = $(this);
		var color = elm.attr("data-fgColor");  
		var perc = elm.attr("value");  

		elm.knob({ 
		   'value': 0, 
		    'min':0,
		    'max':100,
		    "skin":"tron",
		    "readOnly":true,
		    "thickness":.1,
		    'dynamicDraw': true,                
		    "displayInput":false
		});

		$({value: 0}).animate({ value: perc }, {
		  duration: 1000,
		  easing: 'swing',
		  progress: function () {                  
		  	elm.val(Math.ceil(this.value)).trigger('change')
		  }
		});

		//circular progress bar color
		$(this).append(function() {
		  elm.parent().parent().find('.circular-bar-content').css('margin-top',"-95px");
		  elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
		});

	});
}

function setProgressCircleWaypoints() {
	$('#technicalSkills').each(function () { 
		var elem = $(this)
		elem.waypoint(function() {
			if (!window.seen) {
				animateProgressCirles();
				window.seen = true;
			}
		},{
	        triggerOnce: true,
	        offset: '75%'
    	});
	});
}

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '65%'
    });
  });
}

$(function() {
	window.seen = false;
	new Vivus('NameLogo', {type: 'delayed', duration: 200, start: 'inViewport'});
	setProgressCircleWaypoints();
	// onScrollInit( $('.os-animation') );
	// onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});