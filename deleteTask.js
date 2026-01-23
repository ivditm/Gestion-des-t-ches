function deleteTask() {
    const ul = document.getElementById('taskList');
    const lastTask = document.querySelector('#taskList > li:first-child');
    if (lastTask) ul?.removeChild(lastTask);
}