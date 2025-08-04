function cargarContenido(seccion) {
  fetch(`./HTML/${seccion}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('main-content').innerHTML = "<p>Error al cargar la sección.</p>";
      console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  cargarContenido('experiencia');
});