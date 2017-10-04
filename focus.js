
$ = (queryString) => document.querySelector(queryString);


function focus(){
	if($(".html5-video-container").style.position == 'fixed'){
		$(".html5-video-container").style.position = 'relative';
	}
	else{
		$(".html5-video-container").style.position = 'fixed';
	}
	
}


focus();