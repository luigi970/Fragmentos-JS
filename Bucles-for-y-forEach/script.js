var todos = [
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
});