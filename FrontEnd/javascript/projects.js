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
		console.log(works);
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
				console.log(FiltresTravaux);
				return FiltresTravaux;
			}
		}

		//EventListeners des boutons
		const buttonAll = document.getElementById('all');
		buttonAll.addEventListener('click', function(event_all) {
			console.log("Vous avez cliqué sur le bouton 'Tous' !");
			let filteredAll = filtrerParCategorie(0);
			displayFiltersWorks(filteredAll); 
		});

		const buttonO= document.getElementById('objects');
		buttonO.addEventListener('click', function(event_objects) {
			console.log("Vous avez cliqué sur le bouton 'Objets' !");
			let filtered = filtrerParCategorie(1);
			displayFiltersWorks(filtered); 
		});


		const buttonA = document.getElementById('apartments');
		buttonA.addEventListener('click', function(event_apartments) {
			console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			let filteredA = filtrerParCategorie(2);
			displayFiltersWorks(filteredA); 
		});

		const buttonH = document.getElementById('hr');
		buttonH.addEventListener('click', function(event_hr) {
			console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			let filteredHr = filtrerParCategorie(3);
			displayFiltersWorks(filteredHr); 
		});

	});
}
RecupTravaux();

//import { ajoutListenerLogin } from "./login.js";
//const reponse = await fetch('http://localhost:5678/api/users/login');
//const loginapp = await reponse.json();
//ajoutListenerLogin();

//function logout() {

		// Pour récupérer le token
		//sessionStorage.getItem(token);
		//}
		//Suppression token suite à la déconnexion
		//sessionStorage.removeItem('token');
		//sessionStorage.clear();

		//Redirection vers la page d'accueil
		//window.location.href ='index.html';
//}
//logout();	

//const login = document.querySelector("login");
//login.textContent="logout";

function loginButton () {
	const blackbar = document.querySelectorAll("blackbar");
	const modification = document.querySelectorAll("modification");
	const filters = document.querySelectorAll("filters");
	if (loginb) {
		blackbar.style.display = "none";
		modification.style.display = "none";
	} else 
	//(logout) 
	{
		blackbar.style.display = "block";
		modification.style.display = "block";
		filters.style.display = "none";
	}
}