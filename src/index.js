import Todo from './components/todo.js'

let btn = document.createElement('button')
btn.textContent = "Click to make a task"
btn.addEventListener('click', () => {
    let todo = Todo()
    todo.setName('this is the task')
    console.log(todo.getTaskNumber())
})

document.body.appendChild(btn)