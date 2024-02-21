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

		//function filtrerParCategorie(categoryId) {
			//if (categoryId === 0){
				//return works;
			//} else {
				//const FiltresTravaux = works.filter(function(work){
					//return work.categoryId === categoryId;
				//})
				//console.log(FiltresTravaux);
				//return FiltresTravaux;
			//}
		//}
		//filtrerParCategorie();

		//EventListeners des boutons
		const buttonAll = document.getElementById('all');
		buttonAll.addEventListener('click', function(event_all) {
			console.log("Vous avez cliqué sur le bouton 'Tous' !");
			//filtrerParCategorie(0);

		});

		const buttonO= document.getElementById('objects');
		buttonO.addEventListener('click', function(event_objects) {
			console.log("Vous avez cliqué sur le bouton 'Objets' !");
			//const workschoseni =  works.filter(function(work) {
				//return work.categoryId === 1;
			//});
			//console.log(workschoseni);
			//filtrerParCategorie(1);
		});


		const buttonA = document.getElementById('apartments');
		buttonA.addEventListener('click', function(event_apartments) {
			console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			//const workschosenii =  works.filter(function(work) {
				//return work.categoryId === 2;
			//});
			//console.log(workschosenii);
			//filtrerParCategorie(2);
		});

		const buttonH = document.getElementById('hr');
		buttonH.addEventListener('click', function(event_hr) {
			console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			//const workschoseniii =  works.filter(function(work) {
				//return work.categoryId === 3;
				
			//});
			//console.log(workschoseniii);
			//filtrerParCategorie(3);
		});

	});
}
RecupTravaux();

//async function FiltresTravaux() {
	//fetch("http://localhost:5678/api/categories", {
		//method: "GET",
		//headers: { "Content-Type": "application/json" },
	//})

	//.then((response) => {	
		//return response.json();
	//})

	//.then ((categories) => { 
		//console.log(categories);

		//const filters = document.querySelector(".filters");
		//let buttons = document.querySelectorAll("button");
		//buttons.forEach(button => {
			//filters.appendChild(button); 
		//});
		

		//EventListeners des boutons
		//onst buttonone = document.getElementById('all');
		//buttonone.addEventListener('click', function(event_all) {
			//console.log("Vous avez cliqué sur le bouton 'Tous' !");
			

		//});

		//const buttontwo= document.getElementById('objects');
		//buttontwo.addEventListener('click', function(event_objects) {
			//console.log("Vous avez cliqué sur le bouton 'Objets' !");
			//const workschoseni =  works.filter(function(work) {
				//return work.categoryId === 1;
			//});
			//console.log(workschoseni);
			
		//});


		//const buttonthree = document.getElementById('apartments');
		//buttonthree.addEventListener('click', function(event_apartments) {
			//console.log("Vous avez cliqué sur le bouton 'Appartements' !");
			//const workschosenii =  works.filter(function(work) {
				//return work.categoryId === 2;
			//});
			//console.log(workschosenii);
			
		//});

		//const buttonfour = document.getElementById('hr');
		//buttonfour.addEventListener('click', function(event_hr) {
			//console.log("Vous avez cliqué sur le bouton 'Hôtels & Restaurants' !");
			//const workschoseniii =  categories.filter(function(categorie) {
				//return categories[1];
				
			//});
			//console.log(workschoseniii);
			
		//});

	//})
//}
//FiltresTravaux();



