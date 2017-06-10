function save() {
	var i = document.getElementById('item').value;
	var e = document.getElementById('size');
	var s = e.options[e.selectedIndex].value;
	chrome.storage.local.set({
		item: i,
		size: s
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'saved';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

function load() {
	chrome.storage.local.get({
		item: 1,
		size: 0
	}, function(r){
		document.getElementById('item').value = r.item;
		document.getElementById('size').value = r.size;
	});
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);