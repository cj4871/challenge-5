// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId(tasks) {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (!tasks){
        tasks = [];
    }

    return tasks
}
function saveTask(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
        .addClass('')
        .attr('data-task-id', task.Id);
        const cardBody = $('<div>').addClass('card-body');
        const cardDescription = $('<p>').addClass('card-text').text(project.type);
        const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
        const cardDeleteBtn = $('<button>')
            .addClass('btn btn-danger delete')
            .text('Delete')
            .attr('data-project-id', project.id);
        cardDeleteBtn.on('click', handleDeleteProject);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const taskTitle = taskTitleInput.val().trim(); 
    const taskDate = taskDate;
    const description = taskDescriptionInput
    

    const newTask = {
        title: taskTitle,
        date: taskDate,
        description: taskDescription,
        status: 'to-do'
    } 
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $('.draggable').draggable({
        opacity: 0.5,
        zIndex: 100,
        helper: function (event) {
        const original = $(event.target).hasClass('ui-draggable')
            ? $(event.target)
            : $(event.target).closest('.ui-draggable');
        return original.clone().css({
            width: original.outerWidth(),
        });
        },
    });
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
