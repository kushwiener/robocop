function save_item() {
	var item = document.getElementById('item').value;
	var el = document.getElementById('size');
	var size = el.options[el.selectedIndex].value;
	var watch = document.getElementById('watch').checked;
	chrome.storage.local.set({
		item, size, watch
	}, function() {
		var status = document.getElementById('status_item');
		status.textContent = 'saved';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

function save_payment() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var zip = document.getElementById('zip').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value.toUpperCase();
	var countryEl = document.getElementById('country');
	var country = countryEl.options[countryEl.selectedIndex].value;
	var cTypeEl = document.getElementById('cType');
	var cType = cTypeEl.options[cTypeEl.selectedIndex].value;
	var cNumber = document.getElementById('cNumber').value;
	var expMonth = ("0" + document.getElementById('expMonth').value).slice(-2);
	var expYear = document.getElementById('expYear').value;
	var cvv = document.getElementById('cvv').value;
	chrome.storage.local.set({
		name, email, phone, address, zip, city, state, country, cType, cNumber, expMonth, expYear, cvv
	}, function() {
		var status = document.getElementById('status_payment');
		status.textContent = 'saved';
		setTimeout(function() {
			status.textContent = '';
		}, 1000);
	});
}

function load_item() {
	chrome.storage.local.get({
		item: 1,
		size: 'none',
		watch: false
	}, function(r){
		document.getElementById('item').value = r.item;
		document.getElementById('size').value = r.size;
		document.getElementById('watch').checked = r.watch;
	});
}

function load_payment() {
	chrome.storage.local.get({
		name: null, 
		email: null, 
		phone: null, 
		address: null, 
		zip: null, 
		city: null, 
		state: null, 
		country: 'USA',
		cType: 'visa',
		cNumber: null,
		expMonth: null, 
		expYear: null,
		cvv: null
	}, function(r){
		document.getElementById('name').value = r.name;
		document.getElementById('email').value = r.email;
		document.getElementById('phone').value = r.phone;
		document.getElementById('address').value = r.address;
		document.getElementById('zip').value = r.zip;
		document.getElementById('city').value = r.city;
		document.getElementById('state').value = r.state;
		document.getElementById('country').value = r.country;
		document.getElementById('cNumber').value = r.cNumber;
		document.getElementById('expMonth').value = r.expMonth;
		document.getElementById('expYear').value = r.expYear;
		document.getElementById('cvv').value = r.cvv;
	});
}


document.addEventListener('DOMContentLoaded', function() {
	load_item();
	load_payment();
});
document.getElementById('save_item').addEventListener('click', save_item);
document.getElementById('save_payment').addEventListener('click', save_payment);