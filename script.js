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
    
});

