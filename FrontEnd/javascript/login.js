// Variables importantes
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";
const url = "http://localhost:5678/api/users/login";
const data = {
	email: "sophie.bluel@test.tld",
    password: "S0phie",
}

//Page de connexion
fetch(url, {
		method: "POST",
		headers: { 
			"Accept": "application/json",
			"Content-Type": "application/json",
			'Authorization': `Bearer ${token}`  
		},
		body: JSON.stringify(data),
	})

	.then((response) => {	
		return response.json();
	})

	.then ((users) => {

		console.log(users);
		
		const email = document.getElementById("email");
		const password = document.getElementById("password"); 

		//Fonction Validation email avec expression régulière
		function verifierEmail(email) {
			let emailRegExp = new RegExp("[a-z0-9._-]+\.[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
			if (emailRegExp.test(email)) {
				return true
			}
			return false
		}

		//Fonction Validation mot de passe avec expression régulière
		function verifierPassword(password){
			let passwordRegExp = new RegExp("[a-z0-9._-]+");
			if (passwordRegExp.test(password)) {
				return true
			}
			return false
		}

		function login() {
			// Pour stocker le token (uniquement lors de la durée de la session)
			sessionStorage.setItem('token', '');

			// Pour récupérer le token
			sessionStorage.getItem('token');
		}

		function logout() {
			//Suppression token suite à la déconnexion
			sessionStorage.removeItem('token');

			//Redirection vers la page d'accueil
			window.location.href ='index.html';
		}

		const loginform = document.querySelector("form .login");
		loginform.addEventListener("submit", (formdefault) => {
			
			formdefault.preventDefault()
			if (verifierEmail(email) && verifierPassword(password)) {
				console.log("Vous avez réussi !")
				window.location.href = 'index.html'
			}
		})

    }
)    