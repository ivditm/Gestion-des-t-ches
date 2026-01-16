function addTash() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    li.appendChild(textSpan);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}