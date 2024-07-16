function addTodo() {
    const titleInput = document.getElementById('todo-title');
    const textInput = document.getElementById('todo-text');

    const title = titleInput.value;
    const text = textInput.value;

    if (title && text) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('rightList');

        newDiv.innerHTML = `
            <h3 style="text-align: center;">${title}</h3>
            <p>${text}</p>
            <button class="deletebutton" onclick="removeTodo(this)">delete</button>
        `;

        document.getElementById('todo-list').appendChild(newDiv);

        titleInput.value = '';
        textInput.value = '';
    }
}

function removeTodo(button) {
    button.parentNode.remove();
}
