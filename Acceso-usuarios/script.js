var dataUser = [
	{
		userName: "luis",
		password: "secreto"
	},
	{
		userName: "pedro",
		password: "777"
	},
	{
		userName: "Ana",
		password: "444"
	}
];

var feed = [
	{
		titulo: "Noticias del mundo",
		autor: "Roberto Blanch"
	},
	{
		titulo: "Reportaje a pescador",
		autor: "Norma Leandro"
	}
];

var usuario = prompt("Ingresa tu usuario");
var contrasena = prompt("Ingresa tu contrasena");

function isInvalid(user, pass){
	for (var i=0; i < dataUser.length; i++) {
		if(user === dataUser[i].userName &&
			pass === dataUser[i].password) {
			return true;
		} 
	}
	return false;
}

function signIn(user, pass){
	console.log(isInvalid(user, pass));
	if(isInvalid(user, pass)) {
		console.log(feed);
	} else {
		alert("Error");
	}
}

signIn(usuario, contrasena);