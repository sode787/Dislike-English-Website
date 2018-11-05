// And it Begins 
$(function() {
  
	//var className = $('.home').attr('class');
	var anyClass = document.getElementsByClassName('home');
	// . is for classes
	// # is for id's
	$(".downWithEnglish").toggle();
	$(".downWithEnglish").slideDown(1000);

	$(".button").hover('mouseenter', function(){
        $("div").removeClass("hide");
        $("div").fadeIn(750);
        $("#message").slideUp(750);
        // setInterval(refreshNum, 4000)
    });

// muting wont work

		//	alert("Hello! I am an alert box!!");
// function onYouTubeIframeAPIReady() {
//   var player;
//   player = new YT.Player('muteYouTubeVideoPlayer', {
//     videoId: 'BsN6geMgh3k', // YouTube Video ID
//     // width: 560,               // Player width (in px)
//     // height: 316,              // Player height (in px)
//     playerVars: {
//       autoplay: 1,        // Auto-play the video on load
//       controls: 0,        // Show pause/play buttons in player
//       showinfo: 0,        // Hide the video title
//       modestbranding: 1,  // Hide the Youtube Logo
//       loop: 1,            // Run the video in a loop
//       fs: 0,              // Hide the full screen button
//       cc_load_policy: 0, // Hide closed captions
//       iv_load_policy: 3,  // Hide the Video Annotations
//       autohide: 0         // Hide video controls when playing
//     },
//     events: {
//       onReady: function(e) {
//         e.target.mute();
//       }
//     }
//   });



// var $vid = $('myVideo','#myVid');
// var $msg = $('#intro-message'); 
// $msg.css({
//     top:$vid.offset().top + (($vid.height()/2) - ($msg.height()/2)),
//     left:$vid.offset().left + (($vid.width()/2) - ($msg.width()/2))
// });

//     function theDrop() {
//              // The function returns the product of p1 and p2
// }


});