var body = document.body;
 var currentView;
 
 /*PAGES : crean las diferentes vistas de la app*/
 function createRegisterPage() {
     var registerContainer = createContainer('');
     var registerTitle = createTextContainer('h1', 'Register', '');
     var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true };
     var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
     var objectConfirmPassword = { label: 'Confirm password', inputType: 'password', inputPlaceholder: '*******', inputId: 'confirmation-password', isRequired: true }
     var registerForm = createForm([objectEmail, objectPassword, objectConfirmPassword], 'Register', registerUser) //usamos una función que nos permite registrar el usuario y cambiar de vista
  
     var toLoginButton = createButton('Go to login', '', function () { navigateToLogin(view) })
     var view = appendChildren(registerContainer, registerTitle, registerForm, toLoginButton)
 
     return view
 
 }
 
 function createHomePage() {
     var homeContainer = createContainer('')
     var loggedUserId = JSON.parse(sessionStorage.getItem('id')); //comprobar si se ha guardado el id de un usuario loggeado
     var usersJson = localStorage.getItem('users') //me traigo el id y lo convierto a js
     var users = JSON.parse(usersJson) //convierto el json de usuarios js
 
     var userLogged = users ? users.find(function (_user) { return _user.id === loggedUserId }) : undefined
     //comprueba que el usuario loggeado esta en nuestra ddbb(si es que tenemos una base de datos)
 
     if (!userLogged) { //en caso de que no haya un id de usuario loggeado, en lugar de crear la vista de home, creamos la de register
         alert('inicia sesión o create una cuenta primero')
         return createRegisterPage();
     }
 
     var loggedUserUsername = userLogged.username //nos traemos el nombre de usuario para dar un mensaje de bienvenida personalizado
     var welcomeText = createTextContainer('h1', `Welcome, ${loggedUserUsername}`, '')
 
     var logoutButton = createButton('Logout', '', function () { sessionStorage.removeItem('id'); navigateToLogin(homeContainer) })
 
     var titleInput = { label: 'Your post title', inputType: 'text', inputPlaceholder: 'title', inputId: 'title', isRequired: true }
     var descriptionInput = { label: 'Your post description', inputType: 'text', inputPlaceholder: 'description', inputId: 'description', isRequired: true }
     var imgInput = { label: 'Your image url', inputType: 'url', inputPlaceholder: '.png, .jpg', inputId: 'image' , isRequired: false}
     
     var createPostForm = createForm([titleInput, descriptionInput, imgInput], 'Post', data.createPost)
 
     appendChildren(homeContainer, createPostForm, welcomeText, logoutButton);
     return homeContainer
 }
 

 
 function createLoginPage() {
     var loginContainer = createContainer('')
     var loginTitle = createTextContainer('h1', 'Login', '');
     var objectEmail = { label: 'Email', inputType: 'email', inputPlaceholder: 'my@email.com', inputId: 'email', isRequired: true }
     var objectPassword = { label: 'Password', inputType: 'password', inputPlaceholder: '*******', inputId: 'password', isRequired: true }
     var loginForm = createForm([objectEmail, objectPassword], 'Login', loginUser)
     var toRegisterButton = createButton('Go to register', '', function () { navigateToRegister(loginContainer) })
 
     appendChildren(loginContainer, loginTitle, loginForm, toRegisterButton)
     return loginContainer
 }
 
/* NAVIGATES: para los cambios de vista*/

 
 /*Renderizar landing*/
 function renderLanding() {
     var landingContainer = createContainer('');
     var landingTitle = createTextContainer('h1', 'BookVerse', 'title');
     var joinButton = createButton('Join in!', '', function () { navigateToRegister(landingContainer) })
 
     currentView = landingContainer
 
     landingContainer.appendChild(landingTitle);
     landingContainer.appendChild(joinButton);
     body.appendChild(landingContainer);
 }
 
 function renderHomePage() {
     var homePage = createHomePage();
     body.appendChild(homePage)
 }

  /*Crea la nueva vista del register y limpia la vista anterior*/
  function navigateToRegister(previousView) {
    var registerView = createRegisterPage()
    currentView = registerView

    body.replaceChild(registerView, previousView)
}

/*Crea la vista de home y limpia la vista anterior */
function navigateToHome(previousView) {
    var homeView = createHomePage() //en caso de que no haya usuario loggeado, esta función devuelve createRegisterPage()
    currentView = homeView

    body.replaceChild(homeView, previousView)
}

/*Renderiza la vista del login y limpia la vista anterior*/
function navigateToLogin(previousView) {
    var loginContainer = createLoginPage();

    currentView = loginContainer

    body.replaceChild(loginContainer, previousView)
}
