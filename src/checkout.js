var checkout = {
	load: function() {
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
		}, this.init.bind(this));
	},
	init: function(r) {
		console.log(r.cType)
		document.getElementById('order_billing_name').value = r.name;
		document.getElementById('order_email').value = r.email;
		document.getElementById('order_tel').value = r.phone;
		document.getElementById('bo').value = r.address;
		document.getElementById('order_billing_zip').value = r.zip;
		document.getElementById('order_billing_city').value = r.city;
		document.getElementById('order_billing_state').value = r.state;
		document.getElementById('order_billing_country').value = r.country;
		document.getElementById('credit_card_type').value = r.cType;
		document.getElementById('cnb').value = r.cNumber;
		document.getElementById('credit_card_month').value = r.expMonth;
		document.getElementById('credit_card_year').value = r.expYear;
		document.getElementById('vval').value = r.cvv;
		document.querySelector('#cart-cc > fieldset > p:nth-child(5) > label > div').click();
		document.querySelector('#pay > input').click();
	}
};
checkout.load();