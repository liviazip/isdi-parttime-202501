//encontrar usuario (id, mail)
// crear usuario

var data = {
  findUserById: function (id) {           //definimos la función para poder acceder a ella
      var usersJson = localStorage.users //nos traemos los users de la bbdd del localStorage
      if (!usersJson) return undefined  //si NO hay bbdd devolvemos undefined porque no hay ningun usuario

      var users = JSON.parse(usersJson) //si SÍ hay bbdd la convertimos a js

      var userFound = users.find(function(user) { return user.id === id }) //buscamos el usuario con el mismo id usando el metodo find

      return userFound // y lo devolvemos
  },

  findUserByEmail: function (email) {      //definimos la función para poder acceder a ella
      var usersJson = localStorage.users  //nos traemos los users de la bbdd del localStorage
      if (!usersJson) return undefined   //si NO hay bbdd devolvemos undefined porque no hay ningun usuario

      var users = JSON.parse(usersJson)  //si SÍ hay bbdd la convertimos a js

      var userFound = users.find(function (user) { return user.email === email }) //buscamos el usuario con el mismo id usando el metodo find

      return userFound // y lo devolvemos
  },

  createUser: function (user) { //e.g user = {email: "livia@mail.com", password: "livia@mail.com", username: "livia", id: 1743361321566}
      var usersJson = localStorage.users
      var users;
      if (!usersJson) {
          users = []
      } else {
          users = JSON.parse(usersJson)
      }

      users.push(user)

      localStorage.setItem('users', JSON.stringify(users))
  },
  createPost : function (post) //e.g post = {title: "Hello", description: "world", img: "https://iamalink.com/img.png"}
  var postsJson = localStorage.postsJson
        var posts;
        if (!postsJson) {
            posts = [];
        } else {
            posts = JSON.parse(postsJson)
        }

        var userIdJson = localStorage.id;
        if (!userIdJson) {
            userIdJson = sessionStorage.id
        }

        var userId = JSON.parse(userIdJson)

        post.author = userId;
        post.createdOn = new Date();
        post.id = Date.now()

        posts.push(post)

        localStorage.posts = JSON.stringify(posts)
    
}