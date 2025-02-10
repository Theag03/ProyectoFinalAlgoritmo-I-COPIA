
function logout() {

    localStorage.removeItem("user");

    window.location.replace("/login.html");
}

document.getElementById("logout").addEventListener("click", logout);
