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
					//Status Code 200
                    return response.json();
                } else if (response.status >= 400) {
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