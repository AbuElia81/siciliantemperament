# Produktfotos

Die Fotos werden per Dateiname automatisch in die Produktkarten eingeblendet.
Solange eine Datei fehlt, zeigt die Karte den Platzhalter „Foto folgt".

## Namensschema
Fortlaufend nummeriert in der Reihenfolge der Produktliste (`const P=[…]`
in `sicilian-temperament.html`):

```
images/produkte/01.jpg   → Kirschtomatensauce
images/produkte/02.jpg   → Kirschtomatensauce mit Paprika
images/produkte/03.jpg   → Datterino-Tomatensauce
...
images/produkte/23.jpg   → Haselnusscreme
```

- Format: **JPG**, quer, möglichst 4:3, mind. 600 px breit.
- Ein Produkt kann alternativ ein eigenes Bild bekommen, indem im Produkt-
  Objekt ein Feld `img:"images/produkte/eigenername.jpg"` gesetzt wird.

## Titelbild
`images/hero.jpg` — breites Titelbild (16:7) für den Kopfbereich.
