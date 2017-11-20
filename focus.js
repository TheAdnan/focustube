
$ = (queryString) => document.querySelector(queryString);


function focus(){
	if($(".html5-video-container").style.position == 'fixed'){
		$(".html5-video-container").style.position = 'relative';
		$(".html5-video-player").style.setProperty("background-color", "black");
	}
	else{
		$(".html5-video-container").style.position = 'fixed';
		$(".html5-video-player").style.setProperty("background-color", "white");
	}
	
}


focus();