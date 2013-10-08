xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
          json = JSON.parse(xhr.responseText);

          var h1 = document.createElement('h1');
          var h1text = document.createTextNode(json.title);
          h1.appendChild(h1text);
	  document.getElementById('media').appendChild(h1);

          var img = document.createElement('img');
          var src = document.createAttribute('src');
          src.value = json.items[0].media.m;
          img.setAttributeNode(src);
          document.getElementById('media').appendChild(img);
	}
};
xhr.open('GET', '/gh/get/response.json/antoinet/jsfiddle/tree/master/07-parse-json/');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();


