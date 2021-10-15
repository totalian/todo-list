const Component = (() => {
    const body = document.createElement('div')
    body.classList.add('body')

    let title = document.createElement('p')
    title.textContent = "My Task List"
    title.classList.add('large-title')
    body.appendChild(title)

    const createTaskContainer = document.createElement('div')
    createTaskContainer.classList.add('create-task-container')
    body.appendChild(createTaskContainer)

    const createTaskInput = document.createElement('input')
    createTaskInput.type = "text"
    createTaskInput.classList.add('task-input', 'task-input-wide')
    createTaskInput.placeholder = "Add task"
    createTaskContainer.appendChild(createTaskInput)

    const createDateInput = document.createElement('input')
    createDateInput.type = "text"
    createDateInput.classList.add('task-input','date-picker')
    createDateInput.placeholder = "Date"
    createTaskContainer.appendChild(createDateInput)    

    

    return {body,createDateInput}
})()

export default Component