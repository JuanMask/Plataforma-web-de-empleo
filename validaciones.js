//VALIDACIONES LOGIN
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Obtiene los valores ingresados por el usuario
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;

  // Realiza la validación
  if (correo === "ejemplo@trabajador.com" && contrasena === "contraseña123") {
    //
    window.location.href = "PERFIL_TRABAJADOR.html";
  }

  else if (correo === "ejemplo@contratista.com" && contrasena === "contraseña123") {
    window.location.href = "PERFIL_CONTRATISTA.html";
  }
  
  else {
    alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
  }
});










//VALIDACIONES DE REGISTRO TRABAJADOR
function validarRegistro_trabajador() {
  var nombres = document.getElementById("nombres").value;
  var apellidoPaterno = document.getElementById("apellidoPaterno").value;
  var apellidoMaterno = document.getElementById("apellidoMaterno").value;
  var edad = parseInt(document.getElementById("edad").value);
  var telefono = document.getElementById("telefono").value;
  var estado = document.getElementById("estado").value;
  var municipio = document.getElementById("municipio").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var oficio = document.getElementById("oficio").value;
  var disponibilidad = document.getElementById("disponibilidad").value;
  var descripcion = document.getElementById("descripcion").value;
  var foto = document.getElementById("photo").value;

  // Verificar que ningún campo esté vacío
  if (nombres === "" || apellidoPaterno === "" || apellidoMaterno === "" || edad === "" ||
          telefono === "" || estado === "" || municipio === "" ||
          correo === "" || contrasena === "" || oficio === "" || disponibilidad === "" || foto === "" || descripcion === "") {
        alert("POR FAVOR, COMPLETE TODOS LOS CAMPOS DEL FORMULARIO");
        return false;
      }

  // Expresiones regulares para validar campos
  var letrasRegex = /[a-zA-Z,.?!]+/;
  var edadRegex = /^(1[89]|[2-9]\d|\d{3,})$/;
  var telefonoRegex = /^\d{10}$/;
  var correoRegex = /^\S+@\S+\.\S+$/;
  var contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var disponibilidadRegex = /^(SI|NO)$/i;

  // Validación de campos
  if (!letrasRegex.test(nombres) || !letrasRegex.test(apellidoPaterno) || !letrasRegex.test(apellidoMaterno) ||
      !letrasRegex.test(estado) || !letrasRegex.test(municipio))  {
    alert("INGRESE DATOS VÁLIDOS EN LOS CAMPOS DE TEXTO");
    return false;
  }

  if (!disponibilidadRegex.test(disponibilidad)) {
    alert("INGRESE SOLAMENTE SI O NO: DISPONIBILIDAD");
    return false;
  } 

  if (!edadRegex.test(edad)) {
    alert("DEBES SER MAYOR DE EDAD PARA PODER REGISTRARTE");
    return false;
  } 

  if (!telefonoRegex.test(telefono)) {
    alert("INGRESE UN NÚMERO DE TELÉFONO VÁLIDO (10 DÍGITOS)");
    return false;
  }

  if (!correoRegex.test(correo)) {
    alert("INGRESE SU CORREO EN FORMATO CORRECTO (ejemplo@correo.com)");
    return false;
  }

  if (!contrasenaRegex.test(contrasena)) {
    alert("INGRESE LA CONTRASEÑA CON LOS REQUERIMIENTOS ESTABLECIDOS");
    return false;
  }

  // Registro exitoso
  alert("REGISTRO EXITOSO, SE HA CREADO UNA PUBLICACION DE ANUNCIO SOBRE SU OFERTA LABORAL, PUEDE VERLA EN SU PERFIL");
  window.location.href = "PERFIL_TRABAJADOR.html";
}











//VALIDACIONES DE REGISTRO CONTRATISTA
function validarRegistro_contratista() {
  var nombres = document.getElementById("nombres").value;
  var apellidoPaterno = document.getElementById("apellidoPaterno").value;
  var apellidoMaterno = document.getElementById("apellidoMaterno").value;
  var edad = parseInt(document.getElementById("edad").value);
  var telefono = document.getElementById("telefono").value;
  var estado = document.getElementById("estado").value;
  var municipio = document.getElementById("municipio").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var ocupacion = document.getElementById("ocupacion").value;

  // Verificar que ningún campo esté vacío
  if (nombres === "" || apellidoPaterno === "" || apellidoMaterno === "" || edad === "" ||
          telefono === "" || estado === "" || municipio === "" ||
          correo === "" || contrasena === "" || ocupacion === "" ) {
        alert("POR FAVOR, COMPLETE TODOS LOS CAMPOS DEL FORMULARIO");
        return false;
      }

  // Expresiones regulares para validar campos
  var letrasRegex = /[a-zA-Z,.?!]+/;
  var edadRegex = /^(1[89]|[2-9]\d|\d{3,})$/; // Expresión regular para validar la edad
  var telefonoRegex = /^\d{10}$/;
  var correoRegex = /^\S+@\S+\.\S+$/;
  var contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validación de campos
  if (!letrasRegex.test(nombres) || !letrasRegex.test(apellidoPaterno) || !letrasRegex.test(apellidoMaterno) ||
      !letrasRegex.test(estado) || !letrasRegex.test(municipio) || !letrasRegex.test(ocupacion)) {
    alert("INGRESE DATOS VÁLIDOS EN LOS CAMPOS DE TEXTO");
    return false;
  }

  if (!edadRegex.test(edad)) {
    alert("DEBES SER MAYOR DE EDAD PARA PODER REGISTRARTE");
    return false;
  } 

  if (!telefonoRegex.test(telefono)) {
    alert("INGRESE UN NÚMERO DE TELÉFONO VÁLIDO (10 DÍGITOS)");
    return false;
  }

  if (!correoRegex.test(correo)) {
    alert("INGRESE SU CORREO EN FORMATO CORRECTO (ejemplo@correo.com)");
    return false;
  }

  if (!contrasenaRegex.test(contrasena)) {
    alert("INGRESE LA CONTRASEÑA CON LOS REQUERIMIENTOS ESTABLECIDOS");
    return false;
  }


  // Registro exitoso
  alert("REGISTRO EXITOSO");
  window.location.href = "PERFIL_CONTRATISTA.html";
}










//
