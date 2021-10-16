import TaskTags from '../ui/editTodoTagsModal'
import Sidebar from '../ui/sidebar'
import Body from '../ui/body'

const TodoList = (() => {
    const todoList = []

    const addTodo = todo => {
        todoList.push(todo)
        return todoList
    }

    const removeTodo = todo => {
        let i = todoList.indexOf(todo)
        todoList.splice(i,1)
        return todoList
    }

    const getTodoList = () => todoList

    const getFilteredList = tag => {
        todoList.filter(todo => {
            return todo.getTags().includes(tag)
        })
    }

    const build = list => {
        const todoListContainer = document.createElement('div')
        todoListContainer.classList.add('todo-list-container')
        list.forEach(todo => {
            let todoItem = {}
            todoItem.node = todo.build()
            todoItem.todo = todo
            todoListContainer.appendChild(todoItem.node)

            let addTag = todoItem.node.querySelector('.add-tag')
            addTag.addEventListener('click', () => {
                TaskTags.render(todoItem.todo)
            })
        })
        return todoListContainer
    }

    return {getTodoList,addTodo,removeTodo,getFilteredList,build}
})()

export default TodoList