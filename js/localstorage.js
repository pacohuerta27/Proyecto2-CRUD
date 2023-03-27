const nombre = document.getElementById("NombreInput");
const apellido = document.getElementById("ApellidoInput");
const correo = document.getElementById("correoelectronicoInput");
const telefono = document.getElementById("NumeroTelefonicoinput");
const usuarios = document.getElementById("usuarios") || [];

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    telefono: telefono.value,
  };
  console.log(usuario);
};
