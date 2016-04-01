console.log('Starting');
chrome.extension.sendMessage({}, function(response) {
	console.log('Waiting for page load');
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Voting");
		document.querySelectorAll('[value="INCREASE"]')[0].click();
		console.log("Voted to GROW");
		// ----------------------------------------------------------
	}
	}, 100);
});
