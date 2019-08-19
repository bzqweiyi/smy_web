(function() {
	try {

		var ssid = Math.floor(Math.random() * 100000).toString();

		function _addEvent(obj, evt, func, eventobj) {
			eventobj = !eventobj ? obj : eventobj;
			if(obj.addEventListener) {
				obj.addEventListener(evt, func, false);
			} else if(eventobj.attachEvent) {
				obj.attachEvent('on' + evt, func);
			}
		}

		function _logEvent(action, data) {
			var imgobj = new Image;
			var imgid = 'ua_pinggu_org_' + ssid;
			window[imgid] = imgobj;
			imgobj.onload = imgobj.onerror = imgobj.onabort = function() {
				imgobj.onload = imgobj.onerror = imgobj.onabort = null;
				window[imgid] = null;
				imgobj = null;
			};
			imgobj.src = 'https://ua.pinggu.org/a.gif?a=' + action + '&s=' + ssid + '&' + data;
		}

		function _loadPage() {
			var data = 'r=' + encodeURIComponent(document.referrer) + '&t=' + encodeURIComponent(document.title);
			_logEvent('v', data);
		}

		function _getAbsoluteUrl(url) {
			if(url && url != '' && url.toLowerCase().indexOf('javascript:') < 0) {
				var obj = document.createElement('A');
				obj.href = url;
				return obj.href;
			}
			return '';
		}

		function _clickLink() {
			if(this.tagName && this.tagName.toLowerCase() == 'a') {
				var url = _getAbsoluteUrl(this.getAttribute('href'));
				if(url && url != '' && (url.toLowerCase().indexOf('http://') == 0 || url.toLowerCase().indexOf('https://') == 0)) {
					var text = this.textContent || this.innerText || '';
					var data = 'h=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(text);
					_logEvent('c', data);
				}
			}
		}

		_loadPage();

		_addEvent(window, 'load', function() {
			var obj = document.getElementsByTagName('A');
			for(var i = 0; i < obj.length; i++) {
				_addEvent(obj[i], 'click', _clickLink);
			}
		}, document);

	} catch(e) {
	}
})();