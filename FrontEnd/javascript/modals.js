//Déclaration fenêtre modale

// Ouvrir la fenêtre modale lorsque le bouton est cliqué
const openModal = document.getElementById('openModal');
openModal.addEventListener('click', function () {
    const myModal = document.getElementById('myModal');
    myModal.style.display = "block";

    fetch("http://localhost:5678/api/works")
		

	  .then((response) => {	
		return response.json();
	  })

	  .then ((works) => {
		  console.log(works);
       
      const galleryModal = document.querySelector(".gallerymodal");
        for(const work of works) {
          let figureModal = document.createElement("figure");
          const imageModal = document.createElement("img");
          const figcaptionModal = document.createElement("figcaption");

          let trashModal = document.createElement("i");
          trashModal.classList.add(".fa-solid");
          trashModal.classList.add(".fa-trash-can"); 
          trashModal.classList.add(".trash")
          

          imageModal.src=work.imageUrl;
          imageModal.alt=work.title;
          figcaptionModal.innerText=work.title;

          galleryModal.appendChild(figureModal);
          figureModal.appendChild(imageModal);
          figureModal.appendChild(figcaptionModal);
          figureModal.appendChild(trashModal);
        }
        
        //const titlemoda_gallery = document
        //const newphoto = document.querySelector(".newphoto");
        //newphoto.addEventListener('click', function(event_newphoto) {

        //})
    }) 
    .catch (error => {
      console.error('Erreur', error)
    });   
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




// Ajout de travaux


const newvalidation = document.querySelector(".newvalidation");
newvalidation.addEventListener('click', function(event_newvalidation) {
  event_newvalidation.preventDefault();
  
  fetch('http://localhost:5678/api/works', {
    method: "POST",
    headers: { 
      "Accept": "application/json",
      "Content-Type": "multipart/form-data", 
    },
    body: JSON.stringify({
      image: "url_de_l_image",
      title: "le_titre",
      category: "la_categorie"
    }),
    
  })

  .then((response) => {	
    return response.json();
  })

  .then ((data) => {
    console.log(data);
  }) 

  .catch (error => {
    console.error('Erreur', error)
  });

});


// Suppression de travaux existants
//const trash = document.querySelector(".trash");
//trash.addEventListener('click', function(event_trash) {
  //event_trash.preventDefault();
  
  //fetch('http://localhost:5678/api/works/1', {
    //method: "DELETE",
   // headers: { 
   //   "Accept": "*/*",
   // },
  
 // })

 // .then((response) => {	
   // return response.json();
  //})

  //.then ((users) => {
    // const token = users.token
    //alert(token);
  //}) 

  //.catch (error => {
   // console.error('Erreur', error)
  //});

//})