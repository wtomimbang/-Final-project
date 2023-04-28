const todos = [];

const form = document.getElementById('todo-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  
  if (text !== '') {
    const todo = {
      text: text,
      complete: false
    };
    
    todos.push(todo);
    
    displayTodos();
    
    input.value = '';
  }
});

function displayTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  
  todos.forEach(function(todo, index) {
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.complete;
    checkbox.addEventListener('click', function() {
      todo.complete = !todo.complete;
      displayTodos();
    });
    
    const text = document.createElement('span');
    text.textContent = todo.text;
    if (todo.complete) {
      text.style.textDecoration = 'line-through';
    }
    
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', function() {
      todos.splice(index, 1);
      displayTodos();
    });
    
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    
    list.appendChild(li);
  });
}
