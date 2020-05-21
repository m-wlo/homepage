let imie = "Michał";

console.log(`Witaj drogi przybyszu, ja nazywam się ${imie}, a to jest moja strona`);

let notes = document.querySelector(".notes__week-summary--latest");
notes.innerHTML =
  '<h3 class="notes__week-summary--title">Tydzień IV</h3>' +
  '<ul class="notes__week-summary--notes"> ' +
  "  <li>Rozwiązania tydzień III</li> " +
  "  <li>Jest GIT!</li> " +
  "  <li>GitHub</li> " +
  "  <li>Display, wymiary i overflow</li> " +
  "  <li>Jednostki</li> " +
  "  <li>Box model</li> " +
  "  <li>Box-sizing</li> " +
  "  <li>Position</li> " +
  "  <li>Float</li> " +
  "  <li>Typy danych i immutability</li> " +
  "  <li>CodeL formatowanie kodu i lokalny serwer</li> " +
  "  <li>Block - element - modifier</li> " +
  "  <li>DOMowe przedszkole</li> " +
  "  <li>Frontend z perspektywy juniora</li> " +
  "</ul>";
