const nombre = document.getElementById("NombreInput");
const apellido = document.getElementById("ApellidoInput");
const correo = document.getElementById("correoelectronicoInput");
const telefono = document.getElementById("NumeroTelefonicoinput");
const idInput = document.getElementById("idInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");
const btnAgregar = document.getElementById("btnAgregar");
const btnEditar = document.getElementById("btnEditar");

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
        </button>
        <td>
        <td>
        <button
        type="button"
        class= "btn btn-warning"
        onclick="editarUsuario('${usuario.id}')"
        >Editar
        </button>
        </td>
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

const editarUsuario = (id) => {
  btnAgregar.style.display = "none";
  btnEditar.style.display = "inLine";
  const usuario = usuarios.find((usuario) => usuario.id === id);
  nombre.value = usuario.nombre;
  apellido.value = usuario.apellido;
  correo.value = usuario.correo;
  telefono.value = usuario.telefono;
  idInput.value = usuario.id;
};

const confirmarEdicion = () => {
  const usuario = usuarios.find((usuario) => usuario.id === idInput.value);
  usuario.nombre = nombre.value;
  usuario.apellido = apellido.value;
  usuario.correo = correo.value;
  usuario.telefono = telefono.value;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  btnAgregar.style.display = "inLine";
  btnEditar.style.display = "none";
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  telefono.value = "";
  idInput.value = "";

  mostrarUsuarios();
};
window.addEventListener("load", mostrarUsuarios);
