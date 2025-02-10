let button_submit = document.getElementById("submit");

function submitData(data) {
    localStorage.setItem("librofavorito", JSON.stringify(data.librofavorito));
    localStorage.setItem("Nombre", JSON.stringify(data.Nombre));
    localStorage.setItem("Usuario", JSON.stringify(data.Usuario));
}


function logout() {

    localStorage.removeItem("librofavorito");
    localStorage.removeItem("Nombre");
    localStorage.removeItem("Usuario");

    window.location.replace("/login.html");
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    let Nombre = document.getElementById("nombre").value;
    let Usuario = document.getElementById("usuario").value;
    let librofavorito = document.getElementById("librofavorito").value;

    const data = {
        librofavorito: librofavorito,
        Nombre: Nombre,
        Usuario: Usuario,
    };

    submitData(data);
});


document.getElementById("logout").addEventListener("click", logout);