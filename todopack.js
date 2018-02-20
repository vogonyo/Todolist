var todoList = {
todos: [],
displayTodos: function(){
 if(this.todos.length === 0){
 	console.log("TodoList is empty");
 }else{
 	console.log("Todos: ");
 	for(var i = 0;i < this.todos.length;i++){
 		if(this.todos[i].completed === false){
         console.log("( )", this.todos[i].todoText);
 		}else{
 	   console.log("(X)", this.todos[i].todoText);	
 	  }
 	}
 }
}
,
 addTodos: function(todoText){
  this.todos.push({
  	todoText: todoText,
  	completed: false
  });
  views.displayTodos();
 },
changeTodos: function(position, todoText){
 this.todos[position].todoText = todoText;
 views.displayTodos();
},
deleteTodos: function(position){
 this.todos[position].splice(position, 1);
 views.displayTodos();
},
toggleCompleted: function(position){
	var todo = this.todos[position].completed;
	todo = !todo;
},
toggleAll: function(){
	var totalTodos     = this.todos.length,
	    completedTodos = 0
	//count the number of completed todos
	for(var i = 0;i < totalTodos;i++){
		if(this.todos[i].completed === true){
			completedTodos++;
		}
	}
	//Case 1:If everything is true make false
	if(completedTodos === totalTodos){
		for(var i = 0;i < totalTodos;i++){
			this.todos[i].completed = false;
		}
	}
	//Case 2:Otherwise make everything true
	else{
		for(var i = 0; i < totalTodos;i++){
			this.todos[i].completed = true;
		}
	  }
	  views.displayTodos();
	}
}

var handlers = {
 displayTodos: function(){
 	todoList.displayTodos();
 },
 toggleAll: function(){
 	todoList.toggleAll();
 },
 addTodos: function(){
 	var addTodoTextInput = document.getElementById("addTodoTextInput");
 	todoList.addTodos(addTodoTextInput.value);
 	addTodoTextInput.value = ' ';
   },
 changeTodos: function(){
  	var position = document.getElementById("position"),
  	    todoText = document.getElementById("todoText")
  	todoList.changeTodos(position.valueAsNumber, todoText.value);
  	position.value = '';
  	todoText.value = '';
  	views.displayTodos();
  },
 toggleCompleted: function(){
    var toggleCompletedInput = document.getElementById("toggleCompletedInput");
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
    views.displayTodos();
  },
 deleteTodos: function(){
  	var deleteTodoInput = document.getElementById("deleteTodoInput");
  	todoList.deleteTodos(deleteTodoInput.valueAsNumber);
  	deleteTodoInput.value = '';
  	views.displayTodos();
  }
}

var views = {
	displayTodos: function(){
    var todoUl = document.querySelector("ul");
	todoUl.innerHTML = '';
	  for(var i = 0;i < todoList.todos.length; i++){
	       var todoLi = document.createElement("li");
	       var todo = todoList.todos[i];
	     	 todoUl.appendChild(todoLi);
		    todoTextWithCompletion = '';
		   if(todo.completed === true){
         todoTextWithCompletion = '(X) ' + todo.todoText;
		   } else{
		 todoTextWithCompletion = '( )' + todo.todoText;	
		 }
		 todoLi.textContent = todoTextWithCompletion;
	   }
	}
}

