import AddIcon from '../assets/addIcon.png'
import Todo from '../objects/todo.js'
import TodoList from '../objects/todoList.js'
import TagList from '../objects/tagList'

const Component = (() => {
    const body = document.createElement('div')
    body.classList.add('body')

    let title = document.createElement('p')
    title.classList.add('large-title')
    title.textContent = "My Task List"
    body.appendChild(title)

    let currentTodos = TodoList.getTodoList()

    const updateTitle = newTitle => title.textContent = newTitle

    const updateCurrentTodos = newList => currentTodos = newList

    const updateListForTag = tag => {
        updateTitle(tag.getName())
        updateCurrentTodos(tag.getTodos())
    }

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

    const clearTodoList = () => {
        let currentList = document.querySelector('.todo-list-container')
        if (currentList) { body.removeChild(currentList) }
    }


    const renderTodoList = () => {
        clearTodoList()
        let todoList = TodoList.build(currentTodos)
        body.appendChild(todoList)
    }

    // add event listener to add task button
    addIcon.addEventListener('click', () => {
        console.log(TagList.selectedTag)
        if (createTaskInput.value == "") { return }
        let newTodo = Todo()
        newTodo.setName(createTaskInput.value)
        if (createDateInput.value) {
            newTodo.setDate(createDateInput.valueAsDate)
        }
        if(TagList.selectedTag){
            newTodo.addTags(selectedTag)
        }
        TodoList.addTodo(newTodo)
        renderTodoList()
        clearInputs()
        return newTodo
    })


    return { body, createDateInput, updateListForTag, updateTitle, updateCurrentTodos, renderTodoList }
})()

export default Component