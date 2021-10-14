

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

    return body
})()

export default Component