## Auswertung einer einfachen Serverantwort in Form von Text

Die angeforderte AJAX Ressource resultiert in einem kurzen Text, der auf die Webseite angezeigt werden soll.

1. Initialisiere einen `XMLHttpRequest`, der eine GET Abfrage auf `/gh/get/response.html/antoinet/jsfiddle/tree/master/03-response-text/` auslösen soll.
2. Bei abgeschlossener Übertragung und falls die Ressource ohne Fehler geladen werden konnte wird der Text aus dem Feld `responseText` ausgelesen.
3. Dieser Text soll in einem Bereich der Webseite dargestellt werden.

http://jsfiddle.net/gh/get/library/pure/antoinet/jsfiddle/tree/master/03-response-text
