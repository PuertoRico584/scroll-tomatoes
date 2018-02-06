$(document).ready(function(){

	//init scrollMagicController
	var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);


	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

//parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
	.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
	.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
	;

	// var parallaxTl2 = new TimelineMax();
	// parallaxTl2
	// .from('.content-wrapper2', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
	// .from('.bcg2', 2, {y: '-50%', ease:Power0.easeNone}, 0)
	// ;


	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);

	// var slideParallaxScene2 = new ScrollMagic.Scene({
	// 	triggerElement: '.bcg-parallax2',
	// 	triggerHook: 1,
	// 	duration: '100%'
	// })
	// .setTween(parallaxTl)
	// .addTo(controller);

	// //build a scene
	// var ourScene = new ScrollMagic.Scene({
	// 	triggerElement: '#project01 img',
	// 	duration: '90%',
	// 	triggerHook: 0.9
	// })
	// .setClassToggle('#project01', 'fade-in')
	// .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	colorStart: '#99badd',
	// 	colorEnd: 'pink'
	// })
	// .addTo(controller);

	//loop through each .project element
	$('.project').each(function(){
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			duration: '100%',
			triggerHook: 0.8
		})
		.setClassToggle(this, 'fade-in')
		// .addIndicators({
		// 	name: 'fade scene',
		// 	colorTrigger: 'black',
		// 	colorStart: '#99badd',
		// 	colorEnd: 'pink'
		// })
		.addTo(controller);
	});

	});


//
// var ourScene2 = new ScrollMagic.Scene({
// 	triggerElement: '#project02 img',
// 	duration: '90%',
// 	triggerHook: 0.9
// })
// .setClassToggle('#project02', 'fade-in')
// .addIndicators({
// 	name: 'fade scene',
// 	colorTrigger: 'black',
// 	colorStart: '#99badd',
// 	colorEnd: 'pink'
// })
// .addTo(controller);
//
//
// var ourScene3 = new ScrollMagic.Scene({
// 	triggerElement: '#project03 img',
// 	duration: '90%',
// 	triggerHook: 0.9
// })
// .setClassToggle('#project03', 'fade-in')
// .addIndicators({
// 	name: 'fade scene',
// 	colorTrigger: 'black',
// 	colorStart: '#99badd',
// 	colorEnd: 'pink'
// })
// .addTo(controller);
//
// });
