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


//Vérifier la taille de l'image
function showPreview(event) {
  if (event.target.files.length > 0) {
    const maxFileSize = 4 * 1024 * 1024; 
    const image = event.target.files[0]; 
    const btnAdd = document.querySelector(".btn-add");
    const imageIcon = document.querySelector(".image-icon");
    const indications = document.querySelector(".indications");


    // Vérification taille image (l'image ne doit pas dépasser 4mo)
    if (image.size > maxFileSize) {
      alert("Erreur : La taille de l'image dépasse la limite autorisée.");
    } else {
      const src = URL.createObjectURL(image); 
      const imagePreview = document.getElementById("imagePreview");
      imagePreview.src = src;
      imagePreview.style.display = "block";

      //Faire disparaître les autres éléments
      btnAdd.style.display = "none";
      imageIcon.style.display = "none";
      indications.style.display = "none";
    }
  }
}


//Changement couleur bouton Valider + Ajout travaux
function addWork (event) {
  event.preventDefault();

  // Les trois champs du formulaire pour la vérification
  //const image = formData.get("image");
  //const title = formData.get("title");
  //const categorie = formData.get("category");
  
  const formData = new FormData(form);
  formData.set("image", image.files[0]);

  //const btnvalidate = document.getElementById("validate");


  // Si les 3 champs sont remplis
  //if (image !== "" && title !== "" && categorie !== "" ) {
    //Le bouton "Valider" aura le background-color vert 
   // btnvalidate.style.backgroundColor ="#1D6154";

    //On pourra alors cliquer sur le bouton pour ajouter ce nouveau projet
    //btnvalidate.addEventListener('click', function(event_validate) {
     // event_validate.preventDefault();
      //console.log("Le bouton Valider a été cliqué !");
      //alert("Bouton validé");
    
      fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: { 
          "Accept": "application/json",
          "Content-Type": "multipart/form-data", 
        },
        //body: JSON.stringify({
         //image: image,
         // title: title,
         // category: categorie
        //}),
        body : formData
      
      })
  
      .then(response => {
        if (response.status === 201) {
          return response.json();

        } 
      })

      .then((works) =>{
        console.log(works);

        const gallery = document.querySelector(".gallery");
        const newWork = document.createElement('figure');
        newWork.dataset.id = result.id;
        gallery.appendChild(newWork);
      })


  
      .catch (error => {
        console.error('Erreur', error);
        alert("Une erreur est survenue. Veuillez recommencer.")
      });
  
    //});
  //} else if (image === "" && title === "" && categorie === "") {
    //alert("Veuillez remplir tous les champs visibles.");
    //btnvalidate.style.backgroundColor ="#A7A7A7";
  //}
}


function refreshGallery () {

  
  modal1.style.display="flex";
  modal2.style.display="none";
  

}


const form = document.querySelector("form-new");
form.addEventListener("submit", addWork );






//Suppression de travaux existants
//works.forEach(async (work) => {

  //const deleteIcon = document.createElement("i");
  //deleteIcon.className = "fa fa-trash";

  //deleteIcon.addEventListener("click", async function (event) {
    //event.preventDefault(); 


    //fetch('http://localhost:5678/api/works/${workId}', {
    //  method: "DELETE",
     // headers: { 
     //   "Accept": "*/*",
     // },
    //})

  //  .then((response) => {	
    //  if (response.ok){
     //   console.log("L'image a été supprimée avec succès.")
     //   return response.json();
    //  } else if (response.status >= 401) {
    //    throw new Error ("Erreur, veuillez recommencer.")
   //   }
   // })


    //.catch (error => {
    //  console.error('Erreur', error)
   // });


    //suppressionImage(work, items, containerModal);
    

 // });

//});

//function suppressionImage(work,items,containerModal){
  //let workID = work.id

//}