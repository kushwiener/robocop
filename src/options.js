function save() {
	var i = document.getElementById('item').value;
	var e = document.getElementById('size');
	var s = e.options[e.selectedIndex].value;
	var w = document.getElementById('watch').checked;
	chrome.storage.local.set({
		item: i,
		size: s,
		watch: w
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
		size: 0,
		watch: false
	}, function(r){
		document.getElementById('item').value = r.item;
		document.getElementById('size').value = r.size;
		document.getElementById('watch').checked = r.watch;
	});
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);