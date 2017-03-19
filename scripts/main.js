$(document).ready(function(){

	const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PL2Ouhqcw7R4u1Aiou9Y2AabpVHVxp-T_i&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw";
	let source   = $("#video_list_item").html();
	let template = Handlebars.compile(source);
	let html = null;

	$.getJSON( url, function( data ) {
		let container = $('.js-list-container');
		html = template(data);
		console.log(html);
		container.html(html);
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
		let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		let newDate = new Date(date);
		return months[newDate.getMonth()] + ' ' + newDate.getDate() + ',' + newDate.getFullYear();
	});

});
