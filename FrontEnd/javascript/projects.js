// Récupération travaux
const reponse = await fetch("package-lock.json");
const project = await reponse.json();

//Variables projets
const gallery = document.querySelector(".gallery");
const figure = document.createElement("figure");
gallery.appendChild(figure);
const img = document.createElement("img");
const figcaption = document.createElement("figcaption");
figure.appendChild(img);
figure.appendChild(figcaption);








// Filtres travaux