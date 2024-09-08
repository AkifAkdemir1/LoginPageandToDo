const todoList = document.getElementById('todo-list');

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value;

  if (todoText) {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}


function login() {
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the credentials are correct
    if (username === 'admin' && password === 'password') {
      // Redirect to the To-Do app page
      window.location.href = 'todo.html';
    } else {
      // Display error message
      errorMessage.innerHTML = 'Invalid username or password';
    }
  } 