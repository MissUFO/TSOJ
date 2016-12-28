

var progressTimer;

var playButton =  $('#playbutton');
//var stopButton = $('#stopbutton');
//var activityIndicator = $('#activityindicator');
//var textPosition = $('#textPosition');

function onError(error) 
{
	console.log(error.message);
}

function onConfirmRetry(button) {
	if (button == 1) {
		html5audio.play();
	}
}

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}

var myaudioURL = 'http://stream.4zzzfm.org.au:789/;';
var myaudio = new Audio(myaudioURL);
var isPlaying = false;
var readyStateInterval = null;

var html5audio = {
	play: function()
	{
		isPlaying = true;
		myaudio.play();
                isPlaying = true;
		readyStateInterval = setInterval(function(){
			 if (myaudio.readyState <= 2) {
//				 playButton.css('display','none') ;
//				 activityIndicator.css('display' , 'block');
//				 textPosition.html('loading...');
			 }
		},1000);
		myaudio.addEventListener("playing", function() {
			 isPlaying = true;
//			 playButton.css('display','none');
//			 activityIndicator.css('display','none');
//			 stopButton.css('display','block');
		}, false);
	},
	pause: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		stopButton.css('display','none');
		activityIndicator.css('display','none');
		playButton.css('display','block');
	},
	stop: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		stopButton.css('display','none');
		activityIndicator.css('display','none');
		playButton.css('display','block');
		myaudio = null;
		myaudio = new Audio(myaudioURL);
		textPosition.html('');
	}
};
