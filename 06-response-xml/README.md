## Auswertung von XML Daten

Bei der angeforderten AJAX Ressource handelt es sich um eine in XML formattierte CD-Datenbank mit folgender Struktur:

    <catalog>
      <cd>
        <title>Empire Burlesque</title>
        <artist>Bob Dylan</artist>
        <country>USA</country>
        <company>Columbia</company>
        <price>10.90</price>
        <year>1985</year>
      </cd>
      
      <cd>
        <title>Hide your heart</title>
        <artist>Bonnie Tyler</artist>
        <country>UK</country>
        <company>CBS Records</company>
        <price>9.90</price>
        <year>1988</year>
      </cd>
      
      ...
      
    </catalog>

1. Initialisiere einen `XMLHttpRequest`, der eine GET Abfrage auf `/gh/get/response.xml/antoinet/jsfiddle/tree/master/06-response-xml/` auslösen soll.
2. Bei abgeschlossener Übertragung und falls die Ressource ohne Fehler geladen werden konnte liegt das XML-DOM im Feld `responseXML` zum auslesen bereit.
3. Trage folgende Informationen zusammen und stelle sie auf der Webseite dynamisch dar:
    * Die Anzahl CD in der Datenbank
    * Liste aller Titel und Interpreten
    * Bonus: Liste aller britischen Interpreten
    

Tipp: auch hier ist es nötig, den AJAX Request-Header zu setzen (siehe 2-2).

http://jsfiddle.net/gh/get/library/pure/antoinet/jsfiddle/tree/master/06-response-xml
