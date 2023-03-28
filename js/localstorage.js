const nombre = document.getElementById("NombreInput");
const apellido = document.getElementById("ApellidoInput");
const correo = document.getElementById("correoelectronicoInput");
const telefono = document.getElementById("NumeroTelefonicoinput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    telefono: telefono.value,
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

const mostrarUsuarios = () => {
  cuerpoTabla.innerHTML = "";
  usuarios.forEach((usuario) => {
    cuerpoTabla.innerHTML += `<tr>
     <th scope="row">${usuario.id}</th>
     <td>${usuario.nombre}</td>
     <td>${usuario.apellido}</td>
     <td>${usuario.correo}</td>
     <td>${usuario.telefono}</td>
     <td>
     <button
        type="button"
        class= "btn btn-danger"
        onclick="eliminarUsuario('${usuario.id}')"
        >Eliminar
        </button><td>
    </tr>`;
  });
};

const eliminarUsuario = (id) => {
  const usuario = usuarios.find((usuario) => usuario.id === id);
  const index = usuarios.indexOf(usuario);
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

window.addEventListener("load", mostrarUsuarios);
