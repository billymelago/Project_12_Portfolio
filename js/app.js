document.body.onload; 

AOS.init({
	duration: 1200,
	easing: 'ease-in-out-back'
});

let $navContainer = $('.nav-container').hide();
let $projectsHTML = $('#projects').hide();
let $aboutHTML = $('#about');
let $clientsHTML = $('#clients');
let $contactHTML = $('#contact');

//Animate menu icon and show nav links
$('.menu-container').click(function() {
	$(this).toggleClass("change");
	//Show nav links by sliding 
	//in nav panel from right
	$navContainer.toggle('slide', {
		direction: 'right'
	});
});
//After clicking link fadeIn content
//load content via ajax
$('.nav-links li a').click(function(e) {
	e.preventDefault();
	let $thisData = $(this).attr('data-info');
	$('.main-cont').addClass('slide-out');
	
	$.get(`${$thisData}.html`, function(data){
		if($thisData === 'projects') {
			$projectsHTML.html(data).fadeIn(1000);
		} else if($thisData === 'about') {
			$aboutHTML.html(data).fadeIn(1000);
		} else if($thisData === 'clients') {
			$clientsHTML.html(data).fadeIn(1000);
		} else if($thisData === 'contact') {
			$contactHTML.html(data).fadeIn(1000);
		}
	});
	//Slide nav panel out of view
	//return menu icon to original position
	$navContainer.toggle('slide', {direction: 'right'});
	$('.menu-container').toggleClass("change");
});










