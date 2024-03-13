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

      function initGalleryModal() {
        const galleryModal = document.querySelector(".gallerymodal");
        works.forEach(function(work) {
          let figureModal = document.createElement("figure");
          const imageModal = document.createElement("img");
          const figcaptionModal = document.createElement("figcaption");
          let trashModal = document.createElement("i");
          trashModal.className= 'fa-solid fa-trash-can trash';
          

          imageModal.src=work.imageUrl;
          imageModal.alt=work.title;
          figcaptionModal.innerText=work.title;

          galleryModal.appendChild(figureModal);
          figureModal.appendChild(imageModal);
          figureModal.appendChild(figcaptionModal);
          figureModal.appendChild(trashModal);
        
        })
      }
      initGalleryModal();
      
       
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

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
modal2.style.display="none";
const newphotoBtn = document.querySelector(".newphoto");
newphotoBtn.addEventListener('click', function (event_newphotoBtn) {
  event_newphotoBtn.preventDefault();
  modal1.style.display="none";
  modal2.style.display="flex";
  
})




//Vérifier la taille de l'image
//function newImage () {
  //if file === jpg && file {
   // preview.appendChild(list);
    //return
 // } else {
    //console.log("Erreur, veuillez recommencer.")
  //}
//}


//Ajout catégories dans la modale 2
function updateCategories () {
  fetch('http://localhost:5678/api/categories', {
    method:'GET',
    headers : {
    "Accept": "application/json",
    } 
  })

  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des catégories.');
    }
    return response.json();
  })
  
  .then(categories => {
    const selectElement = document.getElementById('category');
    selectElement.innerHTML = ''; 

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.name;
      selectElement.appendChild(option);
    });
  })

  .catch(error => {
    console.error('Erreur:', error);
  });

}
updateCategories();


// Ajout de travaux
//const newvalidation = document.querySelector(".newvalidation");
//newvalidation.addEventListener('click', function(event_newvalidation) {
  //event_newvalidation.preventDefault();
  
  //fetch('http://localhost:5678/api/works', {
    //method: "POST",
    //headers: { 
      //"Accept": "application/json",
      //"Content-Type": "multipart/form-data", 
    //},
    //body: JSON.stringify({
     // image: "url_de_l_image",
      //title: "le_titre",
      //category: "la_categorie"
    //}),
    
  //})

 //.then((response) => {	
   // return response.json();
  //})

 // .then ((data) => {
    //console.log(data);
  //}) 

  //.catch (error => {
   // console.error('Erreur', error)
  //});

//});


// Suppression de travaux existants
let trashModal = document.createElement("i");
trashModal.addEventListener('click', function(event_trash) {
  event_trash.preventDefault();
  
  fetch('http://localhost:5678/api/works/${id}', {
    method: "DELETE",
    headers: { 
     "Accept": "*/*",
    },
  })

  .then((response) => {	
    if (response.ok){
      console.log("L'image a été supprimée avec succès.")
      return response.json();
    } else if (response.status >= 401) {
      throw new Error ("Erreur, veuillez recommencer.")
    }
  })

  //.then ((works) => {
    
    
    
  //}) 

  .catch (error => {
    console.error('Erreur', error)
  });

})