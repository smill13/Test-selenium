document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar envío del formulario

  // Obtener los valores de usuario y contraseña ingresados
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
      // Credenciales válidas, mostrar modal de bienvenida
      mostrarModalBienvenida(username);
  } else {
      // Credenciales inválidas, muestra un mensaje de error
      alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
  }
});

function mostrarModalBienvenida(username) {
  // Obtener el modal de bienvenida
  var modal = new bootstrap.Modal(document.getElementById('modalBienvenida'));

  // Actualizar el contenido del modal con el nombre de usuario
  document.getElementById('nombreUsuario').textContent = username;

  // Mostrar el modal
  modal.show();
}
