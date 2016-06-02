

$('.workouts.show').ready(function() {

// Sets up Audio
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/People/Whistles/Referee_-Fawzi_Ra-7997/Referee_-Fawzi_Ra-7997_hifi.mp3');
    // audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    // $.get();
    // audioElement.addEventListener("load", function() {
    //     // audioElement.play();
    // }, true);

// Sets up Timer
	var hasTimer = false;
	// Init timer start
	$('.start-timer-btn').on('click', function() {
		// remove current timer
		hasTimer = false;
		$('.timer').timer('remove');

		//create and start a new timer
		hasTimer = true;
		$('.timer').timer({
			editable: true,
			duration: '6s',
		    callback: function() {
		    	audioElement.play();
		        // alert('Time up!');

		    }
        });
		// $(this).addClass('hidden');
		$('.pause-timer-btn').removeClass('hidden');
	});

	// Init timer resume
	$('.resume-timer-btn').on('click', function() {
		$('.timer').timer('resume');
		$(this).addClass('hidden');
		$('.start-timer-btn, .pause-timer-btn').removeClass('hidden');
	});


	// Init timer pause
	$('.pause-timer-btn').on('click', function() {
		$('.timer').timer('pause');
		$(this).addClass('hidden');
		$('.resume-timer-btn').removeClass('hidden');
		$('.start-timer-btn').addClass('hidden');
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