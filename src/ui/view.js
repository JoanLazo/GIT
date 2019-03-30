import {signUpWithEmailAndPasswordOnClick, signInWithPasswordOnClick, 
  loginWithGoogleOnClick, loginWithFacebookOnClick, logOutOnClick} from '../lib/view-controller.js';

export const initForm = () => {
  const tmpl = `
    <div class="container-all">
    <div class="color-degrade">
    <header class="cabecera">
      <img  class="img-logo" src="img/logo (1).png" alt="encabezado">
        </header>

              <div>
                <p class="titulo-registro"></p>
              </div>
              <div class="botones-login">
          <button id= "login-facebook" class="btn-face"><img class="footer-img" src="./logo/facebook.png"></button>
          <button id="login-google" class="btn-google"><img class="footer-img"src="./logo/search.png"></button></li>
      </div>
              <div class="btn-1">
                  <button class="boton-iniciar"><a href="#/ingreso" class="link-registro">Inicia Sesión</a></button>
                  <button class="boton-registro"><a href="#/registro" class="link-footer">Registrate</a></button>
              </div>
      </div>
      </div>
    `;
  const div = document.createElement('div');
  div.innerHTML = tmpl;
  const btnGoogle = div.querySelector('#login-google');
  const btnFacebook = div.querySelector('#login-facebook');
  btnGoogle.addEventListener('click', loginWithGoogleOnClick);
  btnFacebook.addEventListener('click', loginWithFacebookOnClick);
  return div;
};

export const registroForm = () => {
  const tmpl = `
  <div class="container fondo">
    <header class="cabecera">
        <img src="logo/logo.png" alt="encabezado" class="footer-img">
    </header>
    <nav class="nav-view">
        <ul>
          <li>
            <a href="#/ingreso"><img class="boton-view" src="./logo/log-in-button-with-arrow.png"></a>
          </li>
        </ul>
    </nav>
    <main class="register">
        <form class="formulario">
            <div>
              <h2 class="titulo-registro">Crea tu cuenta aquí</h2>
            </div>
              
            <div class="input">
              <input class="btn-1" type="text" id="name" required placeholder="Nombre de Perfil">
              <input class="btn-1" id="reg-correo" type="email" placeholder="Correo electrónico" required>
              <input class="btn-1" id="reg-pass" type="password" placeholder="Contraseña" required>
              <p id="error2" class="message-error"></p>
            </div>
            
            <div class="btn-1">
                <button id="btn-crear-cuenta" class="boton-iniciar">Crear Cuenta</button>
            </div>
        </form>
    </main>
    </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = tmpl;
  const btn = div.querySelector('#btn-crear-cuenta');
  btn.addEventListener('click', signUpWithEmailAndPasswordOnClick);
  
  return div;
};

export const ingresoForm = () => {
  const temp = `
 <div class="container fondo">
    <header class="cabecera-form">
        <img src="logo/logo.png" alt="encabezado" class="footer-img">
    </header>

    <main>
      <form class="formulario"> 
          <h2 class="texto-center">Iniciar sesión</h2>
          <div>
              <input class="btn-1" id="correo" type="email" placeholder="Correo electrónico" required>
              <input class="btn-1" id="password" type="password" placeholder="Contraseña" required>
              <p id="error" class="message-error"></p>
          </div>

          <div>
              <button id="ingresar" class="boton-iniciar">Inicia sesión</button>
          </div>
          <p class="parrafo">¿Eres nueva? --- <a href="#/registro" class="link-registro-dos"> REGISTRATE </a> ---  </p>

      </form>
    </main> 
    </div>
   `;

  const div = document.createElement('div');  
  div.innerHTML = temp;
  const btnIngresar = div.querySelector('#ingresar');
   
  btnIngresar.addEventListener('click', signInWithPasswordOnClick);

  return div;
};


// creando la pagina de la red social
export const redsocial = () => {
  const temp = `
  <div class="container fondo">
  <h1 class="texto-1">¿Qué deseas aprender?</h1>
  <div class="btn-1">
  <button class="boton-cursos"><a class="link-registro" href="">Programación</a></button>
  <button class="boton-cursos"><a class="link-registro" href="">Química</a></button>
  <button class="boton-cursos"><a class="link-registro" href="">Física</a></button>
  <button class="boton-cursos"><a class="link-registro" href="">Robótica</a></button>
  <button class="boton-cursos"><a class="link-registro" href="">Matemática</a></button>
  <button class="boton-cursos"><a class="link-registro" href="">Biología</a></button>
  </div>
  
  <footer>
  <div class="">
    <a class="" href=""><img class="img-header"  src="./logo/love.png" alt="Publicaciones"></a>  
    <a class="" href=""><img class="img-header"  src="./logo/profiles (1).png" alt="Noticias"></a>  
    <a class="" href=""><img class="img-header"  src="./logo/user (1).png" alt="Perfil"></a> 
    <a class="" id="cerrar-sesion" href=""><img class="img-header" src="./logo/cancel.png" alt="cerrar-sesión"></a>
  </div>
</footer>
</div>`;

  const div = document.createElement('div');
  div.innerHTML = temp;
  const btnLogOut = div.querySelector('#cerrar-sesion');
  btnLogOut.addEventListener('click', logOutOnClick);
  return div;
};

