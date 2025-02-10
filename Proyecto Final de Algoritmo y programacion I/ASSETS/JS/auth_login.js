let button_submit = document.getElementById("submit");

function validateForm(username, password) {
    let errors = [];

    if (!username) {
        errors.push("El usuario es obligatorio.");
    }
    if (!password) {
        errors.push("La contraseña es obligatoria.");
    }

    return errors;
}

button_submit.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    const errors = validateForm(username, password);

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        const storedData = JSON.parse(localStorage.getItem("user"));

        if (storedData && storedData.username === username && storedData.password === password) {
            alert("Inicio de sesión exitoso:", storedData);
            
        window.location.replace("/Index.html");
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
}
});

