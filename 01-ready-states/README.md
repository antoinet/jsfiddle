## Durchlauf der `XMLHttpRequest` Zustände anzeigen

In dieser Übung soll der Durchlauf der `XMLHttpRequest` Zustände angezeigt werden.

1. Initialisiere einen `XMLHttpRequest`, der eine GET Abfrage auf `/echo/xml/` auslösen soll.
2. Bei jedem Aufruf von `onreadystatechange` soll ein Text mit dem entsprechenden Wert von `readyState` angezeigt werden.

Tipp: verwende dazu die Javascript Methoden `document.createElement()` und `document.createTextNode()` um den DOM dynamisch zu erweitern.

http://jsfiddle.net/gh/get/library/pure/antoinet/jsfiddle/tree/master/01-ready-states
