// Récupération travaux
//async function RecupTravaux() {
    //const reponse = await fetch("http://localhost:5678/api/works");
    //const project = await reponse.json();
    //console.log(JSON.stringify(project));
//}
//RecupTravaux();
const gallery = document.querySelector(".gallery");

fetch("http://localhost:5678/api/works")
.then((response) => {
	return response.json();
})

.then ((users) => {
	console.log(users)
	for(const user of users) {
		let figure = document.createElement("figure");
		const imageElement = document.createElement("img");
		const figcaption = document.createElement("figcaption");
		imageElement.src=user.imageUrl;
		figcaption.innerText=user.title;
		//figcaption[0].title= "Abat-jour Tahina";
		gallery.appendChild(figure);
		figure.appendChild(imageElement);
		figure.appendChild(figcaption);
	}

	//Filtres pour les travaux
	//const filter = document.querySelector("button");

	//filter.addEventListener("click", function () {
		//console.log("Vous avez cliqué sur un filtre !");
   		
		
	//});

	const categoryname = users.filter(user => user.category.name === "Appartements");
	console.log(categoryname);

	//Fonction slides et boutons
	function FilterButton(button) {
		if (button == 'all') {
			if (index < slides.length - 1) {
				index++;
			} else {
			index = 0;
			}
		} if (button == 'objects') {
			if (index > 0) {
				index--;
			} else {
				index =  slides.length -1;
			}
		}
		} if (button == 'appartments') {
			if (index > 0) {
				index--;
			} else {
				index =  slides.length -1;
			}
		} if (button == 'hr') {
			if (index > 0) {
				index--;
			} else {
				index =  slides.length -1;
			}
		}
		
		
	});

}); 

//EventListeners des boutons
const buttonAll = document.querySelector('.all');
buttonAll.addEventListener('click', function(event_one) {
	console.log("Vous avez cliqué sur le bouton 'Tous' !");
	FilterButton('all')
});

const buttonObjects= document.querySelector('.objects');
buttonObjects.addEventListener('click', function(event_two) {
	console.log("Vous avez cliqué sur le bouton 'Objets' !");
	FilterButton('objects')
});
	

const buttonAppartments = document.querySelector('.appartements');
buttonAppartments.addEventListener('click', function(event_three) {
	console.log("Vous avez cliqué sur le bouton 'Appartements' !");
	FilterButton('appartments')
	  
});

const buttonHR = document.querySelector('.hr');
buttonHR.addEventListener('click', function(event_four) {
	console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
	FilterButton('hr')
	  
});





//Variables projets
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

//
//let index = 0;

//Apparition projets dans le bon ordre
//for (let i =0; i < projects.length; i++) {
	//let figure = document.createElement("figure");
	//gallery.appendChild(figure);
	//const imageElement = document.createElement("img");
	//img = projects;
	//const figcaption = document.createElement("figcaption");
	//figure.appendChild(imageElement);
	//figure.appendChild(figcaption);
	//imageElement.src='./assets/images/' + projects[index].image;
	//imageElement.alt=projects[index].alt;
	//imageElement.dataset.id=projects[index].data;
	//imageElement.classList.add(".selected")
	//figcaption.innerHTML = projects[index].tagLine;

	//if (index < projects.length - 1) {
		//index++;
	//}
//}

	
//filters.addEventListener("click", function(){
	//console.log("Vous avez cliqué sur un filtre !");
	//let tag = filter.id;
	//for(let i =0; i < projects.length; i++){
		//imageElement.classList.remove(".selected");

		//if(tag === imageElement.dataset.id || tag === "all"){
			//imageElement.classList.add(".selected");
		//}
	//}



//});



















