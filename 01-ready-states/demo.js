xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	var newListElement = document.createElement('li');
	var text = document.createTextNode('readyState: ' + xhr.readyState + ', HTTP Status: ' + xhr.status);
	newListElement.appendChild(text);
	document.getElementById('states').appendChild(newListElement);
};
xhr.open('POST', '/echo/xml/');
xhr.send();
