window.addEventListener('load', () => {
    const form = document.querySelector("#todo__form");
    const input = document.querySelector("#input");
    const todoList = document.querySelector("#todos");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const todo = document.createElement('div');
        todo.classList.add('todo');

        const todoContent = document.createElement('div');
        todoContent.classList.add('todo__content');

        todo.appendChild(todoContent);

        const inputTodo = document.createElement('input');
        inputTodo.classList.add('text');
        inputTodo.type = 'text';
        inputTodo.value = task;
        inputTodo.setAttribute('readonly', 'readonly');

        todoContent.appendChild(inputTodo);

        const actionButtons = document.createElement('div');
        actionButtons.classList.add('buttons');

        const editTodo = document.createElement('button');
        editTodo.classList.add('edit');
        editTodo.innerText = 'Edit';

        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('delete');
        deleteTodo.innerText = 'Delete';

        actionButtons.appendChild(editTodo);
        actionButtons.appendChild(deleteTodo);

        todo.appendChild(actionButtons);

        todoList.appendChild(todo);

        input.value = '';

        editTodo.addEventListener('click', (e) => {
            if (editTodo.innerText.toLowerCase() == "edit") {
                editTodo.innerText = "Save";
                inputTodo.removeAttribute("readonly");
                inputTodo.focus();
            } else {
                editTodo.innerText = "Edit";
                inputTodo.setAttribute("readonly", "readonly");
            }
        });

        deleteTodo.addEventListener('click', (e) => {
            todoList.removeChild(todo);
        });
    });
});