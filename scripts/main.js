$(document).ready(function(){

	const key = "AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";
	const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PL2Ouhqcw7R4u1Aiou9Y2AabpVHVxp-T_i&key="+ key;
	let sourceList   = $("#video_list_item").html();
	let sourceItem = $('#single-video-item').html();
	let templateList = Handlebars.compile(sourceList);
	let templateItem = Handlebars.compile(sourceItem);
	let htmlList = null;
	let htmlItem = null;

	$.getJSON( url, function( data ) {
		htmlList = templateList(data);
		$(htmlList).appendTo('.js-list-container');
	});

	Handlebars.registerHelper ('truncate', function (str, len) {
		if (str.length > len && str.length > 0) {
				var newStr = str + " ";
				newStr = str.substr (0, len);
				newStr = str.substr (0, newStr.lastIndexOf(" "));
				newStr = (newStr.length > 0) ? newStr : str.substr (0, len);
				return new Handlebars.SafeString ( newStr +'...' );
		}
		return str;
	});

	Handlebars.registerHelper('formatDate', function(date){
		let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
		let newDate = new Date(date);
		return months[newDate.getMonth()] + ' ' + newDate.getDate() + ',' + newDate.getFullYear();
	});

	$('body').on('click', '.js-open-video', function(e){
		e.preventDefault();
		let itemContainer = $('.js-item-container');
		let vidID = $(this).data('id');
		let videoURL = "https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id="+ vidID +"&key="+ key;
		$.getJSON( videoURL, function( data ) {
			htmlItem = templateItem(data);
			console.log(data);
			itemContainer.html(htmlItem).addClass('open');
		});
	});

	$('body').on('click', '.js-return-list', function(e){
		e.preventDefault();
		$('.js-item-container').removeClass('open').html('');
	});

	$('body').on('click', '.js-nex-page', function(e){
		e.preventDefault();
		let token = $(this).data('token');
		let nextPage = url + "&pageToken=" + token;
		$(this).hide(500).remove();
		$.getJSON( nextPage, function( data ) {
			console.log(data);
			htmlList = templateList(data);
			$(htmlList).appendTo('.js-list-container');
		});
	});

});
