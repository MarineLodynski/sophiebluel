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
async function addWork (event) {
 event.preventDefault();

  // Les trois champs du formulaire pour la vérification
  const formData = new FormData(form);
  //formData.set("image", "");
  //formData.set("title", ""); 
  //formData.set("category", ""); 

  const token = localStorage.getItem("token");
  console.log(token);
  //console.log(formData.values());


  //const resultat = await fetch('http://localhost:5678/api/works', {
    //method: "POST",
    //headers: { 
    // "Accept": "application/json",
    // "Content-Type": "multipart/form-data", 
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    // },
    // body : formData
   
  // });

  //const photos = await resultat.json();

  const headers = {
    Authorization: `Bearer ${token}`,
  };
 console.log(formData)
  try {
    
    const response = await fetch('http://localhost:5678/api/works', {
        method: "POST",
        body: formData,
        headers: headers,
        
    });
  

  } catch (error) {
  console.error("Erreur lors de l'envoi des données :", error);
  }


  for (const value of formData.values()) {
    console.log(value);
  };

     await fetch('http://localhost:5678/api/works', {
       method: "POST",
       headers: { 
        //"Accept": "application/json",
        //"Content-Type": "multipart/form-data", 
        //"Authorization": `Bearer ${token}`
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body : formData
      
      })
  
     .then(response => {
      console.log(response.json());
      if (response.status === 201) {
          return response.json();
        } 
      })

     .then((works) =>{
        console.log(works);

        const gallery = document.querySelector(".gallery");
        const newWork = document.createElement('figure');
        //newWork.dataset.id = result.id;
        gallery.appendChild(newWork);

        modal1.style.display="flex";
        modal2.style.display="none";
      })


  
      .catch (error => {
        console.error('Erreur', error);
        alert("Une erreur est survenue. Veuillez recommencer.")
      });
  
   
}

const form = document.querySelector(".form-new");
form.addEventListener("submit", addWork );


//function colorValidate
//const btnvalidate = document.getElementById("validate");


  // Si les 3 champs sont remplis
  //if (image !== "" && title !== "" && categorie !== "" ) {
    //Le bouton "Valider" aura le background-color vert 
// btnvalidate.style.backgroundColor ="#1D6154";





//Suppression de travaux existants

function refreshGallery (event) {
  event.preventDefault();
  const token = localStorage.getItem("token");
  const workId = event.target.dataset.workId;
  //const gallery = document.querySelector(".gallery");
  //const galleryModal = document.querySelector(".gallerymodal");

  
  fetch('http://localhost:5678/api/works/${workId}', {
    method: "DELETE",
    headers: { 
      "Accept": "*/*",
      "Authorization": `Bearer ${token}`
    },
  })

  .then((response) => {	
    if (response.status === 200){
      console.log("L'image a été supprimée avec succès.")
      //return response.json();
      //works.remove();
      //document.querySelector(`figure[data-id="${workId}"]`).remove();

      //const work = document.querySelectorAll(`figure[data-id="${workId}"]`);
     // gallery.remove(work);
      //galleryModal.remove(work);

      works.forEach (work => {
        document.querySelectorAll(`figure[data-id="${workId}"]`);
      })
      //
      //console.log(work);
      //work.remove();

      // Supprimer chaque élément de la galerie
     // work.forEach(item => {
        //item.parentNode.removeChild(item); 
     // });

     
    } else if (response.status >= 401) {
      throw new Error ("Erreur, veuillez recommencer.")
    }
  })

  //.then((works) => {

  //
  //})


  .catch (error => {
    console.error('Erreur', error);
     alert("Une erreur est survenue. Veuillez recommencer.");
  });
}

//Chaque icône "poubelle" aura un évènement 
const deleteIcons = document.querySelectorAll(".trash");
deleteIcons.forEach(deleteIcon => {
  deleteIcon.addEventListener("click", refreshGallery);
});
