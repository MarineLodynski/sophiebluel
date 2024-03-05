//Déclaration fenêtre modale

// Ouvrir la fenêtre modale lorsque le bouton est cliqué
const openModal = document.getElementById('openModal');
openModal.addEventListener('click', function () {
    const myModal = document.getElementById('myModal');
    myModal.style.display = "block";

    fetch("http://localhost:5678/api/works", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})

	.then((response) => {	
		return response.json();
	})

	.then ((works) => {
		console.log(works);
       
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
        
        
    })    
})
  
// Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
}
  
// Fermer la fenêtre modale lorsque l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = "none";
    }
}