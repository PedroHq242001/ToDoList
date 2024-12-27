const taskList = []; 

function updateTask(newTitle) {
    this.taskTitle = newTitle;
}

function createTaskLi() {
    return `
    <li id="${this.taskId}>${this.taskTitle}</li>
    `
}

function createTask(id) {
    const Task = {
        taskId: id,
        taskTitle: "a",
        createTaskLi,
        updateTask
    }
    return Task;
}

export default createTask;