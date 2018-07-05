$ = (queryString) => document.querySelector(queryString);

function focus(){
	if($(".html5-video-container").style.position == 'fixed'){
		$(".html5-video-container").style.position = 'relative';
        $("video").style.width = "854px";
        $("video").style.height = "480px";
		$(".html5-video-player").style.setProperty("background-color", "black");
	}
	else{
		$(".html5-video-container").style.position = 'fixed';
        $("video").style.width = "426px";
        $("video").style.height = "240px";
		$(".html5-video-player").style.setProperty("background-color", "white");
	}
}

focus();