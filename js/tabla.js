function cargarTabla() {
    const lista = JSON.parse(localStorage.getItem("solicitudes") || "[]");
    tabla.innerHTML = "";
    lista.forEach((s, i) => {
        tabla.innerHTML += `
            <tr>
                <td>${s.titulo}</td>
                <td>${s.descripcion}</td>
                <td>${s.area}</td>
                <td><button onclick="borrar(${i})">Eliminar</button></td>
            </tr>`;
    });
}
function borrar(i) {
    const lista = JSON.parse(localStorage.getItem("solicitudes") || "[]");
    lista.splice(i, 1);
    localStorage.setItem("solicitudes", JSON.stringify(lista));
    cargarTabla();
}
function logout() {
    localStorage.removeItem("sesion");
    window.location.href = "index.html";
}
cargarTabla();
