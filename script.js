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

//===== NAVEGACION MENU =====
function mostrarSeccion(seccion) {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("active");
    }

    let botones = document.querySelectorAll(".menu-item");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    document.getElementById("seccion" + nombreSeccion).classList.add("active");
    document.getElementById("menu" + nombreSeccion).classList.add("active");
}

//===== BOTONES DEL MENU =====
document.getElementById("menuDashboard").addEventListener("click", function() {
    mostrarSeccion("Dashboard");
});
document.getElementById("menuVentas").addEventListener("click", function() {
    mostrarSeccion("Ventas");
});
document.getElementById("menuProductos").addEventListener("click", function() {
    mostrarSeccion("Productos");
});
document.getElementById("menuInventario").addEventListener("click", function() {
    mostrarSeccion("Inventario");
});
document.getElementById("menuClientes").addEventListener("click", function() {
    mostrarSeccion("Clientes");
}); 
document.getElementById("menuReportes").addEventListener("click", function() {
    mostrarSeccion("Reportes");
});


 

