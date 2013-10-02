xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
        employees = JSON.parse(xhr.responseText).employees;
        alert(employees.length);
        for (var i = 0; i < employees.length; i++) {
            var li = document.createElement('li');
            var text = document.createTextNode(employees[i].firstName + ' ' + employees[i].lastName);
            li.appendChild(text);
            document.getElementById('employees').appendChild(li);
        }
	}
};
xhr.open('GET', '/gh/get/response.json/antoinet/jsfiddle/tree/master/07-parse-json/');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();


