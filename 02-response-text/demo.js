xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.getElementById('text').innerHTML = xhr.responseText;
	}
};
xhr.open('GET', '/gh/get/response.html/antoinet/jsfiddle/tree/master/02-response-text/');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();

