(function(){
	try{
		function _jg_check(){
			var page_url = window.location.href;
			if(page_url.indexOf('utm_source=') != -1){
				var page_referer = document.referrer;
				var _jg_now = new Date();
				var _jg_t = _jg_now.getTime().toString();
				var g_url = 'g.php?u=' + encodeURIComponent(page_url) + '&r=' + encodeURIComponent(page_referer) + '&t=' + _jg_t;
				var ishttps = document.location.protocol == 'https:' ? true : false;

				var scriptNode = document.createElement("script");
				scriptNode.type = "text/javascript";
				scriptNode.src = (ishttps ? 'https://ssl.www.peixun.net/' : 'http://www.peixun.net/') + g_url;
				document.getElementsByTagName('head')[0].appendChild(scriptNode);

				var scriptNode2 = document.createElement("script");
				scriptNode2.type = "text/javascript";
				scriptNode2.src = (ishttps ? 'https://www.cda.cn/' : 'http://www.cda.cn/') + g_url;
				document.getElementsByTagName('head')[0].appendChild(scriptNode2);
			}
		}
		_jg_check();
	}catch(e){}
})();