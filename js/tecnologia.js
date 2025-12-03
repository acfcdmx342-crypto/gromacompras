function guardarSolicitud() {
    if (!titulo.value || !descripcion.value) 
        return alert("Completa los campos");
    const lista = JSON.parse(localStorage.getItem("solicitudes") || "[]");
    lista.push({
        titulo: titulo.value,
        descripcion: descripcion.value,
        area: area.value
    });
    localStorage.setItem("solicitudes", JSON.stringify(lista));
    alert("Solicitud guardada");
    titulo.value = "";
    descripcion.value = "";
}
function logout() {
    localStorage.removeItem("sesion");
    window.location.href = "index.html";
}