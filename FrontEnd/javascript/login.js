// Variables importantes
//const url = "http://localhost:5678/api/users/login";

  
//export function ajoutListenerLogin () {
	//const emailInput = document.getElementById("email");
	//const passwordInput = document.getElementById("password");
	//const messageErreur = document.querySelector('.error');
	//messageErreur.style.display="none"; 

	//const loginform = document.querySelector(".login");
	//loginform.addEventListener('submit', function(event_connection) {
		//event_connection.preventDefault();

		//const email = emailInput.value;
		//const password = passwordInput.value;

		//const elements = {
			//email: email,
			//password: password,
		//}

		//if (verifierEmail(email) && verifierPassword(password)) {	
				//fetch(url, {
					//method: "POST",
					//headers: { 
						//"Accept": "application/json",
						//"Content-Type": "application/json", 
					//},
					//body: JSON.stringify(elements),
				//})

				//.then((response) => {	
					//if (response.ok ){
						//return response.json();
					//} else {

					//}
					
				//})

				//.then ((users) => {
					//const token = users.token

					//alert(token);
					//alert(email, password);
				
					//localStorage.setItem('token', token);
					//window.location.href = 'index.html';

				//}) 
				//.catch (error => {
					//console.error('Erreur', error)
					//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
				//});

		//} //else {
			//console.log("Erreur, veuillez recommencer.");
			//messageErreur.style.display="block";
		//}
	//});
//}
//Fonction Validation email avec expression régulière
//function verifierEmail(email) {
	//let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
	//return emailRegExp.test(email);
//}
		

//Fonction Validation mot de passe avec expression régulière
//function verifierPassword(password){
	//let passwordRegExp = new RegExp("[a-z0-9._-]+");
	//return passwordRegExp.test(password);
//}

//1er cas
//let response =	fetch(url, { method: "POST",	headers: { 	"Accept": "application/json", "Content-Type": "application/json", },body: JSON.stringify(elements),})

//let responseJson = response.json()


//if (responseJson.token){
		//localStorage.setItem('token', token);
				 // window.location.href = 'index.html';
//}
//else{
 //console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
 //messageErreur.style.display="block";
//}




//2eme cas 
	//let response =	fetch(url, { method: "POST",	headers: { 	"Accept": "application/json", "Content-Type": "application/json", },body: JSON.stringify(elements),})

  //let responseJson = response.json()


  //if (responseJson.token){
         // localStorage.setItem('token', token);
					//window.location.href = 'index.html';
  //}
//else{
   //console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
   //messageErreur.style.display="block";
//}







//if (verifierEmail(email) && verifierPassword(password)) {	
				//fetch(url, {
					//method: "POST",
					//headers: { 
						//"Accept": "application/json",
						//"Content-Type": "application/json", 
					//},
					//body: JSON.stringify(elements),
				//})
				//.then((response) => {	

          //if(response.ok)
         //  {
          //  const token =  response.json().token
           // localStorage.setItem('token', token);
					//  window.location.href = 'index.html';
          // }
					//else{
            //console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
           // messageErreur.style.display="block";
         // }
					
				//})
				//.catch (error => {
					//console.error('Erreur', error)
					//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
				//});
			
	//} else {
		//messageErreur.style.display="block";
	//}
//}







//if (responseJson.token){
	//localStorage.setItem('token', token);
	//window.location.href = 'index.html';
//} else{
 //console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
 //messageErreur.style.display="block";
//}

//if (verifierEmail(email) && verifierPassword(password)) {	
				//fetch(url, {
					//method: "POST",
					//headers: { 
						//"Accept": "application/json",
						//"Content-Type": "application/json", 
					//},
					//body: JSON.stringify(elements),
				//})
				//.then((response) => {	
			
        //if (response.ok) {
			
          	//const token =  response.Json.token
           	//localStorage.setItem('token', token);
			//window.location.href = 'index.html';
        //} else{
        	//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
        	//messageErreur.style.display="block";
        //}
					
				//})
			//.catch (error => {
					//console.error('Erreur', error)
					//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
				//});
			
//} else {
	//messageErreur.style.display="block";
//}


//Fonction Validation email avec expression régulière
//function verifierEmail(email) {
	//let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
	//return emailRegExp.test(email);
//}
		

//Fonction Validation mot de passe avec expression régulière
//function verifierPassword(password){
	//let passwordRegExp = new RegExp("[a-z0-9._-]+");
	//return passwordRegExp.test(password);
//}

//ESSAI 1
//const url = "http://localhost:5678/api/users/login";
//const emailInput = document.getElementById("email");
//const passwordInput = document.getElementById("password");
//const messageErreur = document.querySelector('.error');
//messageErreur.style.display="none"; 

//const loginform = document.querySelector(".login");
//loginform.addEventListener('submit', function(event_connection) {
	//event_connection.preventDefault();

	//const email = emailInput.value;
	//const password = passwordInput.value;

	//const elements = {
		//email: email,
		//password: password,
	//}

	//let response =	fetch(url, { method: "POST",	headers: { 	"Accept": "application/json", "Content-Type": "application/json", },body: JSON.stringify(elements),})

	//let responseJson = response.json();

	//if (verifierEmail(email) && verifierPassword(password)) {	
		//let response =	fetch(url, { method: "POST",	headers: { 	"Accept": "application/json", "Content-Type": "application/json", },body: JSON.stringify(elements),});
		//let responseJson = response.json();
		//fetch(url, {
			//method: "POST",
			//headers: { 
				//"Accept": "application/json",
				//"Content-Type": "application/json", 
			//},
			//body: JSON.stringify(elements),
		//})

		//.then((response) => {	
	
		//if (response.ok) {
	
	  		//const token =  response.Json.token
	   		//localStorage.setItem('token', token);
			//window.location.href = 'index.html';
		//} else{
			//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
			//messageErreur.style.display="block";
		//}
			
		//})
		//.catch (error => {
			//console.error('Erreur', error)
			//console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
		//});
	
	//} else {
		//messageErreur.style.display="block";
	//}
//})

//Fonction Validation email avec expression régulière
//function verifierEmail(email) {
	//let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
	//return emailRegExp.test(email);
//}
		

//Fonction Validation mot de passe avec expression régulière
//function verifierPassword(password){
	//let passwordRegExp = new RegExp("[a-z0-9._-]+");
	//return passwordRegExp.test(password);
//}

//response.json() pas une fonction

//Essai 2
const url = "http://localhost:5678/api/users/login";
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageErreur = document.querySelector('.error');
messageErreur.style.display = "none";

const loginform = document.querySelector(".login");
loginform.addEventListener('submit', function(event_connection) {
    event_connection.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const elements = {
        email: email,
        password: password,
    }

    if (verifierEmail(email) && verifierPassword(password)) {
        fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(elements),
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse la réponse JSON
                } else {
                    throw new Error('Erreur de connexion');
                }
            })
            .then(data => {
                const token = data.token; // Accès à la propriété token
                localStorage.setItem('token', token);
                window.location.href = 'index.html';
            })
            .catch(error => {
                console.error('Erreur', error);
                console.log("Erreur de connexion. Veuillez vérifier votre connexion Internet.");
                messageErreur.style.display = "block";
            });

    } else {
        messageErreur.style.display = "block";
    }
})

// Fonction Validation email avec expression régulière
function verifierEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    return emailRegExp.test(email);
}


// Fonction Validation mot de passe avec expression régulière
function verifierPassword(password) {
    let passwordRegExp = new RegExp("[a-z0-9._-]+");
    return passwordRegExp.test(password);
}