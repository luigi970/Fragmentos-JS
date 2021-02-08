/*var dataUser = [
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

signIn(usuario, contrasena);*/


// bucles

/*var todos = [
	"uno",
	"dos",
	"tres",
	"cuatro"
];
var todosLength = todos.length;
for(var i=0; i<todosLength; i++) {
	console.log(todos[i], i);
}

todos.forEach(function(i){
	console.log(i);
})

todos.forEach( function(todos, index) {
	console.log(todos, index);
});*/

// Agregar a la lista

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function addElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}

button.addEventListener("click", function(){
	if(input.value.length > 0) {
		console.log("Its click");
		addElement();
	}
})

input.addEventListener("keydown", function() {
	if(input.value.length > 0 && event.keyCode === 13){
		console.log("Its enter");
		addElement();
	}
})