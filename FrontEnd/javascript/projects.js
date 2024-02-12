// Récupération travaux
//async function RecupTravaux() {
    //const reponse = await fetch("http://localhost:5678/api/works");
    //const project = await reponse.json();
    //console.log(JSON.stringify(project));
	//for(const user of project) {
		//let figure = document.createElement("figure");
		//const imageElement = document.createElement("img");
		//const figcaption = document.createElement("figcaption");
		//imageElement.src=user.imageUrl;
		//figcaption.innerText=user.title;
		//gallery.appendChild(figure);
		//figure.appendChild(imageElement);
		//figure.appendChild(figcaption);
	//}
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
		imageElement.alt=user.title;
		figcaption.innerText=user.title;
		gallery.appendChild(figure);
		figure.appendChild(imageElement);
		figure.appendChild(figcaption);
	}

	//Filtres pour les travaux
	
	const categoryname = users.filter(user => user.category.name === "Objets");
	console.log(categoryname);

	//const filters = document.querySelectorAll(".filters");
	//for(let filter of filters){
			//filters.addEventListener("click", function(){
			//console.log("Vous avez cliqué sur un filtre !");
			//let tag = categoryname;
			//for(let i =0; i < users.length; i++){
				//imageElement.classList.remove(".selected");

				//if(tag === imageElement.category.name || tag === "all"){
					//imageElement.classList.add(".selected");
				//}
			//}
		//})

	//}

	//Fonction slides et boutons
	//function FilterButton(button) {
		//if (button == 'all') {
			//if (index < slides.length - 1) {
				//index++;
			//} else {
			//index = 0;
			//}
		//} if (button == 'objects') {
			//if (index > 0) {
				//index--;
			//} else {
				//index =  slides.length -1;
			//}
		//}
		//} if (button == 'appartments') {
			//if (index > 0) {
			//	index--;
			//} else {
			//	index =  slides.length -1;
			//}
		//} if (button == 'hr') {
			//if (index > 0) {
				//index--;
			//} else {
				//index =  slides.length -1;
			//}
		//}
		
		
	//});

	//EventListeners des boutons
	
}); 




	
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



















