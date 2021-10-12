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

    return {getTodoList,addTodo,removeTodo,getFilteredList}
})()

export default TodoList