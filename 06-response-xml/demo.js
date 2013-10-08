xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
        var xmlDoc = xhr.responseXML;
        var html = "<ul>";
        var cds = xmlDoc.getElementsByTagName("cd");
        for (i = 0; i < cds.length; i++) {
            var title = cds[i].getElementsByTagName("title")[0].firstChild.nodeValue;
            var artist = cds[i].getElementsByTagName("artist")[0].firstChild.nodeValue;
            html = html + '<li><i>' + title + '</i> by ' + artist + '</li>';
        }
        html += '</ul>';
        document.getElementById("catalog").innerHTML=html;
	}
};
xhr.open('GET', '/gh/get/response.xml/antoinet/jsfiddle/tree/master/06-response-xml/');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();

