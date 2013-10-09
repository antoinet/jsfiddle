function jsonFlickrApi(json) {
	console.log(json);
	alert('done');	
}

var script_element = document.createElement('script');
script_element.src = 'http://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=8649522188&api_key=286a91389f0175f572466c707ba85df9&format=json';
document.getElementsByTagName('head')[0].appendChild(script_element);

