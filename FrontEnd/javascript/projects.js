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
		"data":"data-objects",
		"tagLine":"Abat-jour Tahina"
	},
	{
		"image":"appartement-paris-v.png",
		"alt":"Appartement Paris V",
		"data":"data-apartments",
		"tagLine":"Appartement Paris V"
    },
	{
		"image":"restaurant-sushisen-londres.png",
		"alt":"Restaurant Sushisen - Londres",
		"data":"data-hr",
		"tagLine":"Restaurant Sushisen - Londres"
	},
	{
		"image":"la-balisiere.png",
		"alt":"Villa “La Balisiere” - Port Louis",
		"data":"data-apartments",
		"tagLine":" Villa “La Balisière” - Port Louis"
	},
    {
		"image":"structures-thermopolis.png",
		"alt":"Structures Thermopolis",
		"data":"data-objects",
		"tagLine":"Structures Thermopolis"
	},
	{
		"image":"appartement-paris-x.png",
		"alt":"Appartement Paris X",
		"data":"data-apartments",
		"tagLine":"Appartement Paris X"
	},
	{
		"image":"le-coteau-cassis.png",
		"alt":"Pavillon “Le coteau” - Cassis",
		"data":"data-apartments",
		"tagLine":"Pavillon “Le coteau” - Cassis"
	},
	{
		"image":"villa-ferneze.png",
		"alt":"Villa Ferneze - Isola d’Elba",
		"data":"data-apartments",
		"tagLine":"Villa Ferneze - Isola d’Elba"
	},
    {
		"image":"appartement-paris-xviii.png",
		"alt":"Appartement Paris XVIII",
		"data":"data-apartments",
		"tagLine":"Appartement Paris XVIII"
	},
	{
		"image":"bar-lullaby-paris.png",
		"alt":"Bar “Lullaby” - Paris",
		"data":"data-hr",
		"tagLine":"Bar “Lullaby” - Paris"
	},
	{
		"image":"hotel-first-arte-new-delhi.png",
		"alt":"Hotel First Arte - New Delhi",
		"data":"data-hr",
		"tagLine":"Hôtel First Arte - New Delhi"
	}
]

console.log(projects.length);


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
	imageElement.dataset.id=projects[index].data;
	imageElement.classList.add(".selected")
	figcaption.innerHTML = projects[index].tagLine;

	if (index < projects.length - 1) {
		index++;
	}
}


//Filtres pour les travaux
let filters = document.querySelector(".filters");
let filter = document.querySelectorAll(".filters button");
//document.addEventListener('DOMContentLoaded', function() {
	
	filters.addEventListener("click", function(){
		console.log("Vous avez cliqué sur un filtre !");
		let tag = filter.id;
		for(let imageElement of ".gallery img"){
			//imageElement.classes.replace(".selected", ".not-selected");

			if(tag in imageElement.dataset || tag === "all"){
				imageElement.classes.replace(".not-selected", ".selected");
			}
		}
	});
//});


















