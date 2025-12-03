function togglePassLogin() {
    let p = document.getElementById("pass");
    p.type = p.type === "password" ? "text" : "password";
}
function login() {
    const user = usuario.value.toUpperCase();
    const passw = pass.value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const existe = usuarios.find(u => u.usuario === user && u.pass === passw);
    if (!existe) return alert("Usuario o contraseña incorrectos");
    localStorage.setItem("sesion", user);
    window.location.href = "tecnologia.html";
}