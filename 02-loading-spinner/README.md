## Anzeige eines Kreisels während des Ladezustands

Während der Übertragung eines AJAX Aufrufs soll einen Kreisel angezeigt werden, um den Ladevorgang zu verdeutlichen.

1. Initialisiere einen `XMLHttpRequest`, der eine GET Abfrage auf `/echo/js?delay=2` auslösen soll. Der Parameter `delay` ermöglicht den Aufruf künstlich zu verzögern und wird in Sekunden angegeben.
2. Werte den Inhalt des Feldes `readyState` in der Callback-Funktion `onreadystatechange` um das Bild eines Kreisels ein- und wieder auszublenden.

Tipp: Der Kreisel ist ein animiertes GIF. Auf dem Web findet man etliche davon in allen Varianten, wie z.B. hier: [ajaxload.info](http://www.ajaxload.info/)

http://jsfiddle.net/gh/get/library/pure/antoinet/jsfiddle/tree/master/02-loading-spinner
