// Variables importantes
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";
const url = "http://localhost:5678/api/users/login";
const elements = {
	email: "sophie.bluel@test.tld",
    password: "S0phie",
}
  
//export function ajoutListenerLogin () {
	const emailInput = document.getElementById("email");
	const passwordInput = document.getElementById("password"); 

	const loginform = document.querySelector(".login");
	loginform.addEventListener('submit', function(event_connection) {
		event_connection.preventDefault();

		const email = emailInput.value;
		const password = passwordInput.value;

		if (verifierEmail(email) && verifierPassword(password)) {
			if (email === "sophie.bluel@test.tld" && password === "S0phie") {		
				fetch(url, {
					method: "POST",
					headers: { 
						"Accept": "application/json",
						"Content-Type": "application/json", 
					},
					body: JSON.stringify(elements),
				})

				.then((response) => {	
					return response.json();
				})

				.then ((users) => {
					const token = users.token

					console.log("Vous avez réussi !")
				
					
					sessionStorage.setItem('token', token);
					window.location.href = 'index.html';
					// Pour récupérer le token
					//sessionStorage.getItem(token);
					//}
					//login();

				}) 
				.catch (error => {
					console.error('Erreur', error)
				});
			} else {
			console.log("Erreur, veuillez recommencer.");
			}
		}
	});
//}
//Fonction Validation email avec expression régulière
function verifierEmail(email) {
	let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
	return emailRegExp.test(email);
}
		

//Fonction Validation mot de passe avec expression régulière
function verifierPassword(password){
	let passwordRegExp = new RegExp("[a-z0-9._-]+");
	return passwordRegExp.test(password);
}