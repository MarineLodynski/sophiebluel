// Récupération travaux
fetch("http://localhost:5678/api-docs/");
async function RecupTravaux() {
    const reponse = await fetch("http://localhost:5678/api-docs/");
    const project = await reponse.json();
    console.log(project);
}


//Variables projets
const projects = [
	{
		"image":"abajour-tahina.png",
		"tagLine":"Abat-jour Tahina"
	},
	{
		"image":"appartement-paris-v.png",
		"tagLine":"Appartement Paris V"
    },
	{
		"image":"restaurant-sushisen-londres.png",
		"tagLine":"Restaurant Sushisen - Londres"
	},
	{
		"image":"la-balisiere.png",
		"tagLine":" Villa “La Balisiere” - Port Louis"
	},
    {
		"image":"structures-thermopolis.png",
		"tagLine":"Structures Thermopolis"
	},
	{
		"image":"appartement-paris-x.png",
		"tagLine":"Appartement Paris X"
	},
	{
		"image":"le-coteau-cassis.png",
		"tagLine":"Pavillon “Le coteau” - Cassis"
	},
	{
		"image":"villa-ferneze.png",
		"tagLine":"Villa Ferneze - Isola d’Elba"
	},
    {
		"image":"appartement-paris-xviii.png",
		"tagLine":"Appartement Paris XVIII"
	},
	{
		"image":"bar-lullaby-paris.png",
		"tagLine":"Bar “Lullaby” - Paris"
	},
	{
		"image":"hotel-first-arte-new-delhi.png",
		"tagLine":"Hotel First Arte - New Delhi"
	}
]

console.log(projects.length);

const gallery = document.querySelector(".gallery");
let index = 0;

//Apparition images dans le bon ordre
for (let i =0; i < projects.length; i++) {
	const figure = document.createElement("figure");
	gallery.appendChild(figure);
	const imageElement = document.createElement("img");
	img = projects;
	const figcaption = document.createElement("figcaption");
	figure.appendChild(imageElement);
	figure.appendChild(figcaption);
	imageElement.src='./assets/images/' + projects[index].image;
	figcaption.innerHTML = projects[index].tagLine;
	if (index < projects.length - 1) {
		index++;
	}
}











// Filtres travaux