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

	.then ((works) => {
		//console.log(works);
		//Ajout des travaux dans la galerie
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

		//const workschoseni =  works.filter(function(work) {
			//return work.categoryId === 1;
		//});

		//const workschosenii =  works.filter(function(work) {
			//return work.categoryId === 2;
		//});
		

		//const workschoseniii =  works.filter(function(work) {
			//return work.categoryId === 3;
		//});
		
		

		//EventListeners des boutons
		const buttonone = document.getElementById('all');
		buttonone.addEventListener('click', function(event_all) {
			console.log("Vous avez cliqué sur le bouton 'Tous' !");
			console.log(works);
		});

		const buttontwo= document.getElementById('objects');
		buttontwo.addEventListener('click', function(event_objects) {
			console.log("Vous avez cliqué sur le bouton 'Objets' !");
			const workschoseni =  works.filter(function(work) {
				return work.categoryId === 1;
			});
			console.log(workschoseni);
		});


		const buttonthree = document.getElementById('apartments');
		buttonthree.addEventListener('click', function(event_apartments) {
			console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			const workschosenii =  works.filter(function(work) {
				return work.categoryId === 2;
			});
			console.log(workschosenii);
		});

		const buttonfour = document.getElementById('hr');
		buttonfour.addEventListener('click', function(event_hr) {
			console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			const workschoseniii =  works.filter(function(work) {
				return work.categoryId === 3;
				
			});
			console.log(workschoseniii);
		});

		


	});




}
RecupTravaux();

