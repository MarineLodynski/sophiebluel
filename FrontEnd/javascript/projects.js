// Récupération travaux
//async function RecupTravaux() {
    //const reponse = await fetch("http://localhost:5678/api/works");
    //const projects = await reponse.json();
    //console.log(JSON.stringify(projects));
//}
//RecupTravaux();

//async function AjoutTravaux() {
	//for(const user of projects){
		//let figure = document.createElement("figure");
		//const imageElement = document.createElement("img");
		//const figcaption = document.createElement("figcaption");
		//imageElement.src=user.imageUrl;
		//figcaption.innerText=user.title;
		//gallery.appendChild(figure);
		//figure.appendChild(imageElement);
		//figure.appendChild(figcaption);
	//}
	//RecupTravaux();
//}
//AjoutTravaux();

const gallery = document.querySelector(".gallery");
async function RecupTravaux() {
    //const reponse = await fetch("http://localhost:5678/api/works");
    //const projects = await reponse.json();
    //console.log(JSON.stringify(projects));


	fetch("http://localhost:5678/api/works", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	.then((response) => {	
		return response.json();
	})

	.then ((users) => {
		//console.log(users)

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

	
	});




}
RecupTravaux();


async function FiltrerTravaux() {
	fetch("http://localhost:5678/api/works", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	.then((response) => {	
		return response.json();
	})

	.then ((users) => {
		//console.log(users)

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
		let listeBTNFilters = document.querySelectorAll(".filters");
		for(let index = 0; index < listeBTNFilters.length; index++) {
			listeBTNFilters[index].addEventListener("click", function(event) {
				console.log('Vous avez cliqué !');
				FilterButton();
			})
		}

	});
    
		
	
	
		


		function FilterButton() {
			//const categoryall = users.filter(user => user.category.name === "Tous");
			//console.log(categoryall);
			//const categoryobjects = users.filter(user => user.category.name === "Objets");
			//console.log(categoryobjects);
			//const categoryappartments = users.filter(user => user.category.name === "Appartements");
			//console.log(categoryappartments);
			//const categoryhr = users.filter(user => user.category.name === "Hotels & restaurants");
			//console.log(categoryhr);
	
			const categories = users.map(user => user.categoryId);
			console.log(categories);
			
	
			//switch(categoryId){
				//case 1:
					//users.categoryId === 1
					//break;
				//case 2:
					//users.categoryId === 2
					//break;
				//case 3:
					//users.categoryId === 3
					//break;
				//default:
					//;
			//}
	
			//const filteredImages = figure.filter(function(filter) {
				//return users.categoryId === 2; // Remplacez 1 par la categoryId que vous souhaitez filtrer
			//});
			//console.log(filteredImages);
		};


}
FiltrerTravaux();












