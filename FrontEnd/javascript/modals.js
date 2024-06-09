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
        galleryModal.innerHTML = '';
        works.forEach(function(work) {
          let figureModal = document.createElement("figure");
          figureModal.dataset.workID = work.id;
          const imageModal = document.createElement("img");
          const figcaptionModal = document.createElement("figcaption");
          let trashModal = document.createElement("i");
          trashModal.className= 'fa-solid fa-trash-can trash';
          trashModal.dataset.workId = work.id;
          trashModal.addEventListener('click', deleteWork);

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

//function colorValidate
//const btnvalidate = document.getElementById("validate");
  // Si les 3 champs sont remplis
  //if (image !== "" && title !== "" && categorie !== "" ) {
    //Le bouton "Valider" aura le background-color vert 
// btnvalidate.style.backgroundColor ="#1D6154";

//Fonction asynchrone des ajouts
async function addWork(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("form-new"));
  const token = localStorage.getItem("token");
  
  if (!token) {
    console.error("Token d'authentification manquant.");
    alert("Vous devez être connecté pour ajouter un travail.");
    return;
  }
  
  try {
    const resultat = await fetch('http://localhost:5678/api/works', {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token
      },
      body: formData
    });
    
    if (!resultat.ok) {
      throw new Error('Erreur lors de l\'ajout du projet');
    }
    
    const work = await resultat.json();
    //console.log(work);
    addWorkToGallery(work);
    addWorkToModalGallery(work);
    
    modal1.style.display = "flex";
    modal2.style.display = "none";
  } catch (error) {
    console.error('Erreur lors de l\'ajout du projet:', error);
    alert("Une erreur est survenue lors de l'ajout du projet. Veuillez réessayer.");
  }
}

//Ajout Travaux dans la galerie principale
function addWorkToGallery(work) {
  const gallery = document.querySelector(".gallery");
  const newWork = createWorkElement(work);
  gallery.appendChild(newWork);
}

//Ajout Travaux dans la galerie de la modale
function addWorkToModalGallery(work) {
  const galleryModal = document.querySelector(".gallerymodal");
  const newWorkModal = createWorkElement(work, true);
  galleryModal.appendChild(newWorkModal);
}

//Fonction Création après le formulaire
function createWorkElement(work, isModal = false) {
  const newWork = document.createElement('figure');
  newWork.setAttribute("workID", work.id);
  newWork.dataset.workId = work.id;

  const newImage = document.createElement('img');
  newImage.src = work.imageUrl;
  
  const newTitle = document.createElement('figcaption');
  newTitle.textContent = work.title;

  newWork.appendChild(newImage);
  newWork.appendChild(newTitle);

  if (isModal) {
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash-can trash';
    trashIcon.dataset.workId = work.id;
    trashIcon.addEventListener('click', deleteWork); 
    newWork.appendChild(trashIcon);
    //console.log("Work ID:", work.id);
  }

  return newWork;
}
document.querySelector(".form-new").addEventListener("submit", addWork);

//Fonction asynchrone galerie à jour
async function deleteWork(event) {
  event.preventDefault();

  const trashIcon = event.currentTarget;
  const workId = trashIcon.dataset.workId;
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token d'authentification manquant.");
    alert("Vous devez être connecté pour supprimer un travail.");
    return;
  }

  //console.log("Work ID:", workId);

  try {
    const resultat = await fetch(`http://localhost:5678/api/works/${workId}`, {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (!resultat.ok) {
      throw new Error('Erreur. La suppression du projet ne fonctionne pas.');
    }

    removeWorkFromGallery(workId);
    removeWorkFromModalGallery(workId);
  } catch (error) {
    console.error('Erreur lors de la requête DELETE:', error);
    alert("Une erreur est survenue lors de la suppression du projet. Veuillez réessayer.");
  }
}

function removeWorkFromGallery(workId) {
  const workElement = document.querySelector(`.gallery figure[data-work-id="${workId}"]`);
  if (workElement) {
    workElement.remove();
  }
}

function removeWorkFromModalGallery(workId) {
  const workElement = document.querySelector(`.gallerymodal figure[data-work-id="${workId}"]`);
  if (workElement) {
    workElement.remove();
  }
}