document.body.onload; 

AOS.init({
	duration: 1200,
	easing: 'ease-in-out-back'
});

let $navContainer = $('.nav-container').hide();
let $projectsHTML = $('#projects').hide();
let $aboutHTML = $('#about');
let $clientsHTML = $('#clients');
let $contactHTML = $('#contact').hide();
let $footer = $('footer');

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
			$footer.fadeOut();
			$projectsHTML.html(data).fadeIn(1000);
		} else if($thisData === 'about') {
			$aboutHTML.html(data).fadeIn(1000);
		} else if($thisData === 'clients') {
			$clientsHTML.html(data).fadeIn(1000);
		} else if($thisData === 'contact') {
			$projectsHTML.fadeOut(function(){
				$contactHTML.html(data).fadeIn(1000);
			});
			
		}
	});
	//Slide nav panel out of view
	//return menu icon to original position
	$navContainer.toggle('slide', {direction: 'right'});
	$('.menu-container').toggleClass("change");
});




$('#nav-projects').accordion({
	collapsible: "true",
	active: "false",
	heightStyle: "content",
	icons: false
});

var prev = 0;
var $window = $(window);
var nav = $('nav');
var header = $('.header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  header.toggleClass('hidden', scrollTop > prev);	
  prev = scrollTop;
});








