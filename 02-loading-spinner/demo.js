xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4) {
		document.getElementById('spinner').style.display = 'none';
	}
};
xhr.open('GET', '/echo/js?delay=2');
xhr.send();
document.getElementById('spinner').style.display = 'block';
