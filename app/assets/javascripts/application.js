// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require timer.jquery
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .


$('.workouts.show').ready(function() {

	var hasTimer = false;
	// Init timer start
	$('.start-timer-btn').on('click', function() {
		hasTimer = true;
		$('.timer').timer({
			editable: true
        });
		$(this).addClass('hidden');
		$('.pause-timer-btn, .remove-timer-btn').removeClass('hidden');
	});

	// Init timer resume
	$('.resume-timer-btn').on('click', function() {
		$('.timer').timer('resume');
		$(this).addClass('hidden');
		$('.pause-timer-btn, .remove-timer-btn').removeClass('hidden');
	});


	// Init timer pause
	$('.pause-timer-btn').on('click', function() {
		$('.timer').timer('pause');
		$(this).addClass('hidden');
		$('.resume-timer-btn').removeClass('hidden');
	});

	// Remove timer
	$('.remove-timer-btn').on('click', function() {
		hasTimer = false;
		$('.timer').timer('remove');
		$(this).addClass('hidden');
		$('.start-timer-btn').removeClass('hidden');
		$('.pause-timer-btn, .resume-timer-btn').addClass('hidden');
	});

	// Additional focus event for this demo
	$('.timer').on('focus', function() {
		if(hasTimer) {
			$('.pause-timer-btn').addClass('hidden');
			$('.resume-timer-btn').removeClass('hidden');
		}
	});

	// Additional blur event for this demo
	$('.timer').on('blur', function() {
		if(hasTimer) {
			$('.pause-timer-btn').removeClass('hidden');
			$('.resume-timer-btn').addClass('hidden');
		}
	});
});