document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío del formulario
  
    // Obtener los valores de usuario y contraseña ingresados
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin') {
      // Credenciales válidas, redirecciona a Home.html
      this.innerHTML = 'login bien';
      //window.location.href = 'Home.html';
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  });
  