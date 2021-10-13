import TodoList from "../objects/todoList"

const Tag = () => {
    let name
    const setName = newName => {
        name = newName
        return newName
    }

    const getName = () => name

    const getTodos = tag => {
        let todosWithTag = TodoList.getTodoList().filter(todo => {
            return todo.getTags().includes(tag)
        })
        return todosWithTag
    }

    const todoCount = tag => {
        let todosWithTag = getTodos(tag)
        return todosWithTag.length
    }

    return {getName, setName, getTodos, todoCount}
}

export default Tag