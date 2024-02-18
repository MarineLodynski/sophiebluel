// Récupération travaux
const gallery = document.querySelector(".gallery");
async function RecupTravaux() {
	fetch("http://localhost:5678/api/works", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	.then((response) => {	
		return response.json();
	})

	.then ((users) => {
		//Ajout des travaux dans la galerie
		for(const user of users) {
			let figure = document.createElement("figure");
			const imageElement = document.createElement("img");
			const figcaption = document.createElement("figcaption");
			imageElement.src=user.imageUrl;
			imageElement.alt=user.title;
			figcaption.innerText=user.title;
			gallery.appendChild(figure);
			figure.appendChild(imageElement);
			figure.appendChild(figcaption);
		}

	
		const listeBTNFilters = document.querySelectorAll(".filters");
		for(let index = 0; index < listeBTNFilters.length; index++) {
			listeBTNFilters[index].addEventListener("click", function(event) {
				console.log('Vous avez cliqué !');
				FilterButton();
			})
		}

		//function FilterButton() {
			//const categories = users.map(user => user.categoryId);
			//console.log(categories);
			
	
			
		//};

		//EventListeners des boutons
		
		//let button = document.querySelector("button");
		//listeBTNFilters.appendChild(button);
		document.addEventListener('DOMContentLoaded', function() {
			const buttonAll = document.querySelector('.all');
			buttonAll.addEventListener('click', function(id) {
				console.log("Vous avez cliqué sur le bouton 'Tous' !");
			});

			const buttonObjects= document.querySelector('.objects');
			buttonObjects.addEventListener('click', function(id) {
				console.log("Vous avez cliqué sur le bouton 'Objets' !");
			});


			const buttonAppartments = document.querySelector('.appartements');
			buttonAppartments.addEventListener('click', function(id) {
				console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			});

			const buttonHR = document.querySelector('.hr');
			buttonHR.addEventListener('click', function(id) {
				console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			});

		});


	});




}
RecupTravaux();

