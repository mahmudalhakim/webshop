/* 
Kravspecifikations
1. Allt ska utvecklas från scratch i HTML, CSS och JavaScript.
Ni får kopiera kod från w3schools.com och getbootstrap.com
Ni får använda jQuery Core men inte jQuery Plugins.

2. Skapa en webbshop som visar minst 10 olika produkter.
Ni får välja innehåll såsom bilder och texter.
Använd Bootstrap för att bygga upp layout och form.
Visa titel, kort beskrivning, en bild, pris och en” Köp” - knapp under varje produkt.
OBS!Produkterna måste hämtas från en JSON - fil.

3. Skapa en JSON - fil för att lagra produkter.Varje produkt är alltså ett objekt.
Skapa en länk till JSON - filen längst ner på sidan.

4. Skapa en beställningssida(en helt ny sida.One - Page layout är ej godkänd).
För G - nivå får man bara välja en enda produkt.
Visa info om den valda produkten högst upp på sidan.
Kunden behöver ange namn, telefon, e - post och leveransadress.
Validera alla fält.Visa lämpliga felmeddelanden.

5. Vid beställning, visa en bekräftelse på skärmen.
Beställningen behöver ej skickas iväg via t.ex.e - post eller lagras i en databas(överkurs).

För VG - nivå ska ni dessutom arbeta med följande
6. En kund ska kunna välja flera produkter av samma sort.
7. En kund ska även kunna köpa flera olika produkter.
8. Skapa en varukorg och lagra den via Web Storage API– Local Storage.
9. Man ska kunna visa varukorgen.
10. Man ska kunna ta bort en produkt från varukorgen.
11. Man ska kunna ändra antal produkter i varukorgen.
12. Man ska kunna tömma varukorgen.
13. Vid beställning visa bekräftelse på skärmen med alla detaljer om köpet inkl.bilder.
*/

// Cashing variabler
const cartBtn = document.querySelector('.selling-btn');
const emptyCartBtn = document.querySelector('.?');

// Kundvagn array
let cart = [];



$(document).ready(function () {
    // När man klickar på knappen ska varan läggas i korgen
    $('selling-btn').click(function () {
        $('.demo1').show(300);
    });
});