var name = "Daniel Avila";
document.getElementById("order_billing_name").value = name;
var email = "danavila1020@gmail.com";
document.getElementById("order_email").value = email;
var phone = "509 531 4321";
document.getElementById("order_tel").value = phone;
var address = "230 Riverwood St";
document.getElementById("bo").value = address;
var zip = "99352";
document.getElementById("order_billing_zip").value = zip;
var city = "Richland";
document.getElementById("order_billing_city").value = city;
var state = "WA";
document.getElementById("order_billing_state").value = state;
var cNumber = "4701320316321300";
document.getElementById("cnb").value = cNumber;
var month= "05";
document.getElementById("credit_card_month").value = month;
var year= "2021";
document.getElementById("credit_card_year").value = year;
function clickCVVElements(selectors, wait) {
	if (wait) {
		setTimeout(function(){clickCVVElements(selectors)}, 200);
	} else {
		var el = document.querySelector(selectors[0]);
		if (el) {
			el.value = '554';
			
			selectors.shift();
			if (selectors.length > 0) {
				clickCVVElements(selectors, true);
			}
		} else {
			setTimeout(function(){clickCVVElements(selectors)}, 100);
		}
	}
}
clickCVVElements(['#vval']);

function clickElements(selectors, wait) {
	if (wait) {
		setTimeout(function(){clickElements(selectors)}, 200);
	} else {
		var el = document.querySelector(selectors[0]);
		if (el) {
			el.click();

			selectors.shift();
			if (selectors.length > 0) {
				clickElements(selectors, true);
			}
		} else {
			setTimeout(function(){clickElements(selectors)}, 100);
		}
	}
}
clickElements(['#cart-cc > fieldset > p:nth-child(5) > label > div > ins','#pay > input']);