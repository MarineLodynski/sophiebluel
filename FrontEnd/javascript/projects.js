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
		"alt":"Abat-jour Tahina",
		"tagLine":"Abat-jour Tahina"
	},
	{
		"image":"appartement-paris-v.png",
		"alt":"Appartement Paris V",
		"tagLine":"Appartement Paris V"
    },
	{
		"image":"restaurant-sushisen-londres.png",
		"alt":"Restaurant Sushisen - Londres",
		"tagLine":"Restaurant Sushisen - Londres"
	},
	{
		"image":"la-balisiere.png",
		"alt":"Villa “La Balisiere” - Port Louis",
		"tagLine":" Villa “La Balisière” - Port Louis"
	},
    {
		"image":"structures-thermopolis.png",
		"alt":"Structures Thermopolis",
		"tagLine":"Structures Thermopolis"
	},
	{
		"image":"appartement-paris-x.png",
		"alt":"Appartement Paris X",
		"tagLine":"Appartement Paris X"
	},
	{
		"image":"le-coteau-cassis.png",
		"alt":"Pavillon “Le coteau” - Cassis",
		"tagLine":"Pavillon “Le coteau” - Cassis"
	},
	{
		"image":"villa-ferneze.png",
		"alt":"Villa Ferneze - Isola d’Elba",
		"tagLine":"Villa Ferneze - Isola d’Elba"
	},
    {
		"image":"appartement-paris-xviii.png",
		"alt":"Appartement Paris XVIII",
		"tagLine":"Appartement Paris XVIII"
	},
	{
		"image":"bar-lullaby-paris.png",
		"alt":"Bar “Lullaby” - Paris",
		"tagLine":"Bar “Lullaby” - Paris"
	},
	{
		"image":"hotel-first-arte-new-delhi.png",
		"alt":"Hotel First Arte - New Delhi",
		"tagLine":"Hôtel First Arte - New Delhi"
	}
]

console.log(projects.length);

const gallery = document.querySelector(".gallery");
let index = 0;

//Apparition projets dans le bon ordre
for (let i =0; i < projects.length; i++) {
	let figure = document.createElement("figure");
	gallery.appendChild(figure);
	const imageElement = document.createElement("img");
	img = projects;
	const figcaption = document.createElement("figcaption");
	figure.appendChild(imageElement);
	figure.appendChild(figcaption);
	imageElement.src='./assets/images/' + projects[index].image;
	imageElement.alt=projects[index].alt;
	figcaption.innerHTML = projects[index].tagLine;

	if (index < projects.length - 1) {
		index++;
	}
}



// Apparition filtres pour les travaux
//const buttons = ['Tous', 'Objets', 'Appartements', 'Hôtels & restaurants'];
//console.log(buttons.length);
//for (let i=0; i < buttons.length; i++) {
	//const filters = document.getElementsByClassName(".buttons");
	//let button = document.createElement("button");
	//filters.appendChild(button);

	//if (index < buttons.length - 1) {
		//index++;
	//}
//}




