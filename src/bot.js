var bot = {
	item: 0,
	size: 0,
	load: function() {
		chrome.storage.local.get({
			item: 1,
			size: 0
		}, this.init.bind(this));
	},
	init(r) {
		this.item = r.item;
		this.size = r.size;
		if (this.size > 0) {
			document.querySelector('#container > article:nth-child('+this.item+') > div > a').click();
			this.selectItemSize('select#size', function() {
				this.clickElements(['#add-remove-buttons > input','#cart > a.button.checkout']);
			}.bind(this));
		} else {
			this.clickElements(['#container > article:nth-child('+this.item+') > div > a','#add-remove-buttons > input','#cart > a.button.checkout']);		
		}
	},
	selectItemSize(selector, callback) {
		var el = document.querySelector(selector);
		if (el) {
			el.value = el.getElementsByTagName('option')[this.size-1].value;
			callback();
		} else {
			setTimeout(function(){this.selectItemSize(selector, callback)}.bind(this), 100);
		}
	},
	clickElements(selectors, wait) {
		if (wait) {
			setTimeout(function(){this.clickElements(selectors)}.bind(this), 200);
		} else {
			var el = document.querySelector(selectors[0]);
			if (el) {
				el.click();
				selectors.shift();
				console.log(selectors.length)
				if (selectors.length > 0) {
					this.clickElements(selectors, true);
				}
			} else {
				setTimeout(function(){this.clickElements(selectors)}.bind(this), 100);
			}
		}
	}
};
bot.load();