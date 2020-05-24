let imie = "Michał";

console.log(
  `Witaj drogi przybyszu, ja nazywam się ${imie}, a to jest moja strona`
);

let intro = document.querySelector(".introduction");
intro.innerHTML =
  '<img class="introduction__picture" src="sample_pic.jpg" alt="komputer na biurku" />' +
  '<div class="introduction__text">' +
  '<h2 class="introduction__text--header">Kilka słów o mnie</h2>' +
  '<p class="introduction__text-paragraph">' +
  "  Cześć! Mam na imię Michał i jestem studentem Politechniki" +
  "  Poznańskiej." +
  "</p>" +
  '<p class="introduction__text--paragraph">' +
  "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />" +
  "  Magni facilis consequatur animi id, vero ab dolores cumque quisquam," +
  "  aperiam, iusto eligendi debitis cupiditate cum voluptas. Excepturi," +
  "  est? Cum, officiis hic." +
  "</p>" +
  "</div>" +
  '<div class="introduction__clear" />';
