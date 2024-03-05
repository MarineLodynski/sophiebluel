//Déclaration fenêtre modale
//let modal = null;

//const openModal = function (e) {
   // e.preventDefault()
   // const target = document.querySelector(e.target.getAttribute('href'))
    //target.style.display = null
    //target.removeAttribute('aria-hidden')
   // target.setAttribute('aria-modal', 'true')
   // modal = target
   // modal.addEventListener('click', closeModal)
//}

//const closeModal = function (e) {
   // if (modal === null) return
   // e.preventDefault()
    //const target = document.querySelector(e.target.getAttribute('href'))
    //target.style.display = "none"
    //target.setAttribute('aria-hidden', 'true')
    //target.removeAttribute('aria-modal')
    //modal.removeEventListener('click', closeModal) 
    //modal = null
//}

//document.querySelectorAll('.js-modal').forEach(a => {
    //a.addEventListener('click', openModal)
//})

// Ouvrir la fenêtre modale lorsque le bouton est cliqué
document.getElementById('openModal').onclick = function() {
    document.getElementById('myModal').style.display = "block";
}
  
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