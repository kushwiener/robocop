chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {
	    code: 'var clicked = true;'
	}, function() {
	    chrome.tabs.executeScript(tab.id, {file: "src/bot.js"});
	});
});