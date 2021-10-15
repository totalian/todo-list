import AddIcon from '../assets/addIcon.png'
import Todo from '../objects/todo.js'
import TodoList from '../objects/todoList.js'

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
    createDateInput.type = "date"
    createDateInput.classList.add('task-input', 'date-picker')
    createDateInput.placeholder = "Date"
    createTaskContainer.appendChild(createDateInput)

    const addIcon = new Image()
    addIcon.src = AddIcon
    createTaskContainer.appendChild(addIcon)

    const clearInputs = () => {
        createTaskInput.value = ""
        createDateInput.value = ""
    }

    const allTodos = TodoList.getTodoList()

    const clearTodoList = () => {
        let currentList = document.querySelector('.todo-list-container')
        if (currentList) { body.removeChild(currentList) }
    }


    const renderTodoList = list => {
        clearTodoList()
        let todoList = TodoList.build(list)
        body.appendChild(todoList)
    }

    // add event listener to add task button
    addIcon.addEventListener('click', () => {
        if (createTaskInput.value == "") { return }
        let newTodo = Todo()
        newTodo.setName(createTaskInput.value)
        if (createDateInput.value) {
            newTodo.setDate(createDateInput.valueAsDate)
        }
        TodoList.addTodo(newTodo)
        renderTodoList(allTodos)
        clearInputs()
        return newTodo
    })


    return { body, createDateInput }
})()

export default Component