$("#slidebar_me").click(function(){
	$.slidebars.close();
});
$("#slidebar_about_me").click(function(){
	$.slidebars.close();
});
$("#slidebar_msg_collection").click(function(){
	$.slidebars.close();
});
$("#slidebar_care_list").click(function(){
	$.slidebars.close();
});
$("#slidebar_setting").click(function(){
	$.slidebars.close();
});
$("#slidebar_feedback").click(function(){
	$.slidebars.close();
});
$("#slidebar_invite_friend").click(function(){
	$.slidebars.close();
});
// $("#slidebar_msg_collection").click(function(){
// 	$.slidebars.close();
// });

function ajax (url, parms) {
	parms = parms || {};
	var req = new XMLHttpRequest(),
	post = parms.post || null,
	callback = parms.callback || null,
	timeout = parms.timeout || null;

	req.onreadystatechange = function () {
		if ( req.readyState != 4 ) return;

				// Error
				if ( req.status != 200 && req.status != 304 ) {
					if ( callback ) callback(false);
					return;
				}

				if ( callback ) callback(req.responseText);
			};

			if ( post ) {
				req.open('POST', url, true);
				req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			} else {
				req.open('GET', url, true);
			}

			req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

			req.send(post);

			if ( timeout ) {
				setTimeout(function () {
					req.onreadystatechange = function () {};
					req.abort();
					if ( callback ) callback(false);
				}, timeout);
			}
		}
		/*
		*****************************************************************************/

		var myScroll;

		function loaded () {
			myScroll = new IScroll('#page_update_list', {
				mouseWheel: true,
				infiniteElements: '#scroller',
				//infiniteLimit: 2000,
				dataset: requestData,
				dataFiller: updateContent,
				cacheSize: 1000
			});
		}

		function requestData (start, count) {
			myScroll.updateCache(start, '<li class="row listitem listitem-care"><a href="friend.html"><div class="col-xs-1 bar bar-blue"></div><div class="col-xs-2 "><img class="img-circle" src="img/ic_weehi_icon.png"></div><div class="col-xs-9 listitem-content"></div></a></li>');
			// ajax('dataset.php?start=' + +start + '&count=' + +count, {
			// 	callback: function (data) {
			// 		data = JSON.parse(data);
			// 		myScroll.updateCache(start, data);
			// 	}
			// });
}

function updateContent (el, data) {
	el.innerHTML = data;
}
