// ==== variables globales====
let  idioma = 'es';

//===== LOGIN=====
document.getElementById("btnLogin").addEventListener("click", function() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        document.getElementById("loginError").textContent = "Por favor, complete todos los campos.";
        document.getElementById("loginError").style.color = "red";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function(){
            document.getElementById("pantallaLogin").style.display = "none";
            document.getElementById("pantallaPrincipal").style.display = "block";
        })
        .catch(function(error) {
            document.getElementById("loginError").textContent = "Correo o contraseña incorrectos: ";
            document.getElementById("loginError").style.color = "red";


            
        });
    
});

 

