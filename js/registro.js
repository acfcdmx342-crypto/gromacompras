function toUpper(i) { i.value = i.value.toUpperCase(); }
function togglePass() {
    const p = document.getElementById("pass");
    p.type = p.type === "password" ? "text" : "password";
}
function checkStrength() {
    const pass = document.getElementById("pass").value;
    const bar = document.getElementById("strength");
    let s = 0;
    if (pass.length >= 6) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[a-z]/.test(pass)) s++;
    if (/\d/.test(pass)) s++;
    if (/[@$!%*?&#._+\-=]/.test(pass)) s++;
    bar.style.width = (s * 20) + "%";
    bar.style.background = s <= 2 ? "red" : s <= 4 ? "orange" : "green";
}

cargarListas();
function cargarListas() {
    let zonas = JSON.parse(localStorage.getItem("zonas") || "[]");
    let empresas = JSON.parse(localStorage.getItem("empresas") || "[]");
    if (zonas.length === 0) zonas = ["TULA","TIZAYUCA","TULANCINGO"];
    if (empresas.length === 0) empresas = ["PINGOL","ACF","TORVAL"];
    localStorage.setItem("zonas", JSON.stringify(zonas));
    localStorage.setItem("empresas", JSON.stringify(empresas));
    zona.innerHTML = zonas.map(z => `<option>${z}</option>`).join("");
    empresa.innerHTML = empresas.map(e => `<option>${e}</option>`).join("");
}

function registrar() {
    if (!nombre.value || !usuario.value || !pass.value || !correo.value ||
        !telefono.value || !puesto.value || !zona.value || !empresa.value)
        return alert("Todos los campos son obligatorios");

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    if (usuarios.some(u => u.usuario === usuario.value))
        return alert("Usuario ya existe");

    usuarios.push({
        nombre: nombre.value,
        usuario: usuario.value.toUpperCase(),
        pass: pass.value,
        correo: correo.value,
        telefono: telefono.value,
        puesto: puesto.value,
        zona: zona.value,
        empresa: empresa.value
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado");
    window.location.href = "index.html";
}
