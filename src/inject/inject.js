chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("this should start");
		timer = setInterval(function(){
			document.querySelectorAll('[value="INCREASE"]')[0].click();
			console.log("voted");
		}, 1000);
		// ----------------------------------------------------------
	}
	}, 10);
});
