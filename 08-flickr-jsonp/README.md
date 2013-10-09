## Auswertung von JSON Daten

In dieser Übung soll ein JSON Bilddatensatz aus Flickr ausgewertet und das Bild und weitere Attribute wie den Titel dargestellt werden.

1. Initialisiere einen `XMLHttpRequest`, der eine GET Abfrage auf `/gh/get/response.json/antoinet/jsfiddle/tree/master/07-parse-json/` auslösen soll.
2. Bei abgeschlossener Übertragung und falls die Ressource ohne Fehler geladen werden konnte liegt das JSON im Feld `responseText` als String vor.
3. Parse den JSON String und wandle es in ein Javascript Objekt um.
4. Stelle folgende daten dar:
    * Bildtitel
    * Vorschau des Bilds
    * Bonus: Liste der Tags

Tipp:
 * Auch hier ist es nötig, den AJAX Request-Header zu setzen (siehe 2-2).
 * Die JSON Daten sind hier einsehbar: [https://raw.github.com/antoinet/jsfiddle/master/07-parse-json/demo.response.json]()

http://jsfiddle.net/gh/get/library/pure/antoinet/jsfiddle/tree/master/08-flickr-jsonp
