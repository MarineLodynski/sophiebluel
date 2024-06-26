// Récupération travaux
async function RecupTravaux() {
	fetch("http://localhost:5678/api/works", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	.then((response) => {	
		return response.json();
	})

	.then ((works) => {
		//Ajout des travaux dans la galerie
		function InitWorks() {
			const gallery = document.querySelector(".gallery");
			for(const work of works) {
			let figure = document.createElement("figure");
			const imageElement = document.createElement("img");
			const figcaption = document.createElement("figcaption");
			imageElement.src=work.imageUrl;
			imageElement.alt=work.title;
			figcaption.innerText=work.title;
			gallery.appendChild(figure);
			figure.appendChild(imageElement);
			figure.appendChild(figcaption);
			}
		}
		InitWorks();

		function displayFiltersWorks(filtresTravaux){
			const figure = document.querySelectorAll(".gallery figure")
			for (i = 0;  i < works.length; i++){
				if (filtresTravaux.includes(works[i]) ){
					figure[i].style.display="block"
				} else {
					figure[i].style.display="none"
				}
			}
		}

		function filtrerParCategorie(categoryId) {
			if (categoryId === 0){
				return works;
			} else {
				const FiltresTravaux = works.filter(function(work){
					return work.categoryId === categoryId;
				})
				return FiltresTravaux;
			}
		}

		//EventListeners des boutons
		const buttonAll = document.getElementById('all');
		buttonAll.addEventListener('click', function(event_all) {
			console.log("Vous avez cliqué sur le bouton 'Tous' !");
			let filteredAll = filtrerParCategorie(0);
			displayFiltersWorks(filteredAll); 
			ButtonColor(buttonAll); 
		});

		const buttonO= document.getElementById('objects');
		buttonO.addEventListener('click', function(event_objects) {
			console.log("Vous avez cliqué sur le bouton 'Objets' !");
			let filtered = filtrerParCategorie(1);
			displayFiltersWorks(filtered); 
			ButtonColor(buttonO); 
		});


		const buttonA = document.getElementById('apartments');
		buttonA.addEventListener('click', function(event_apartments) {
			console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			let filteredA = filtrerParCategorie(2);
			displayFiltersWorks(filteredA); 
			ButtonColor(buttonA); 
		});

		const buttonH = document.getElementById('hr');
		buttonH.addEventListener('click', function(event_hr) {
			console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			let filteredHr = filtrerParCategorie(3);
			displayFiltersWorks(filteredHr);
			ButtonColor(buttonH); 
		});

		function ButtonColor(clickedButton) {
			// Couleurs de base
			const defaultBackgroundColor = '#FFFEF8';
			const defaultColor = '#1D6154';
		
			// Vérifie si le bouton est déjà actif
			const isActive = clickedButton.classList.contains('active');
		
			// Tous les boutons auront ces couleurs avant l'événement 'click'
			buttonAll.style.backgroundColor = defaultBackgroundColor;
			buttonO.style.backgroundColor = defaultBackgroundColor;
			buttonA.style.backgroundColor = defaultBackgroundColor;
			buttonH.style.backgroundColor = defaultBackgroundColor;
			
			buttonAll.style.color = defaultColor;
			buttonO.style.color = defaultColor;
			buttonA.style.color = defaultColor;
			buttonH.style.color = defaultColor;
		
			// Si l'on clique sur le bouton, les couleurs vont changer
			if (!isActive) {
				clickedButton.style.backgroundColor = "#1D6154";
				clickedButton.style.color = "white";
				clickedButton.classList.add('active');
			} else {
				clickedButton.classList.remove('active');
			}
		}

	});
}
RecupTravaux();


//Récupérer le token
let token = localStorage.getItem('token')
const divblackbar = document.querySelector(".blackbar");
divblackbar.style.display="none";
const divmodification = document.querySelector(".modification");
divmodification.style.display="none";


//filters.style.display="flex";

// Si le token est bien récupéré
if(token){
  	console.log('OK')
	const login = document.querySelector('#login')
	//login.innerHTML = "<a href='login.html'>logout </a>" ;
	//login.setAttribute("id", "login");
	login.innerHTML ="logout";

	//Constitution barre noire - création tous les éléments
	//const divblackbar = document.createElement("div");
	//divblackbar.classList.add("blackbar");
	

	const iconblackbar = document.createElement("i");
	iconblackbar.classList.add("fa-regular", "fa-pen-to-square");
	const paragraphblackbar = document.createElement("p");
	paragraphblackbar.textContent = "Mode édition";

	//body.appendChild(divblackbar);
	divblackbar.appendChild(iconblackbar);
	divblackbar.appendChild(paragraphblackbar);
	divblackbar.style.display="flex";
	

	//Constitution modification
	const divmyprojects = document.querySelector(".myprojects");
	divmyprojects.classList.add("prodiv");
	//const divmodification = document.createElement("div");
	//divmodification.classList.add(".modification");
	

	const iconmodification = document.createElement("i");
	iconmodification.classList.add("fa-regular", "fa-pen-to-square");
	
	const amodification = document.createElement("a");
	amodification.textContent = "à modifier";

	//divmyprojects.appendChild(divmodification);
	divmodification.appendChild(iconmodification);
	divmodification.appendChild(amodification);
	divmodification.style.display="flex";

	
	//Disparition filtres
	const filters = document.querySelector(".filters");
	filters.style.display = "none";
	

	login.addEventListener('click', function (event) {
		event.preventDefault();
		//Suppression token suite à la déconnexion
		localStorage.removeItem('token');
		localStorage.clear();

		//Redirection vers la page d'accueil
		window.location.href ='index.html';
	})

}


