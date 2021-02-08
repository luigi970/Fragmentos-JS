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

function addClick(e) {
	if(input.value.length > 0) {
		console.log("Its click");
		addElement();
	}
}

function addKeyDown(e) {
	if(input.value.length > 0 && event.keyCode === 13){
		console.log("Its enter");
		addElement();
	}
}

button.addEventListener("click", addClick(e));

input.addEventListener("keydown", addKeyDown(e));