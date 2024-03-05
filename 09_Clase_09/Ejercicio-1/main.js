// 1 - VERIFICAR PASSWORD

// Crea una petición de password, (que tú creas e incrustas en el código) de manera que si el usuario y el password coinciden con los guardados, dé acceso a la página *, y si no, que siga preguntando.

// Una vez te funcione, intenta hacer la presentación más atractiva mediante CSS.

// + EXTRA: dar un máximo de intentos, por ejemplo, si no se consigue a los 3 intentos, salir del programa.


function password() {
    const user = "admin";
    const pass = "admin";
    let userInvalue = document.getElementById("usuario-input").value;
    let passInvalue = document.getElementById("contrasena-input").value;
    let intentos = 1;
    while (intentos <= 3) {

        if ((userInvalue == user) && (passInvalue == pass)) {
            console.log("Credenciales correctas");
            window.open("index.html");
            intentos = 4;
        } else {
            intentos++;
            alert("Nombre de usuario o contraseña incorrecto");
        }

    }
}