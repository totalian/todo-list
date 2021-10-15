import Circle from '../assets/circle.png'
import { format } from 'date-fns'

let taskNumber = 0

const Todo = () => {
    let name
    let dueDate
    let isCompleted = false
    let taskId = taskNumber
    const tagList = []

    const getCompletionState = () => isCompleted

    const getName = () => name

    const setName = newName => {
        name = newName
    }

    const getDate = () => dueDate

    const setDate = newDate => {
        dueDate = newDate
    }

    const setCompleted = () => {
        isCompleted = true
    }

    const setUncompleted = () => {
        isCompleted = false
    }

    const getTags = () => {
        return tagList
    }

    const addTags = (newTags) => {
        tagList.push(...newTags)
    }

    const removeTags = removedTags => {
        for (let i = 0; i < removedTags.length; i++) {
            let positionToRemove = tagList.indexOf(i)
            tagList.splice(positionToRemove, 1)
        }
    }

    const build = () => {
        let todoContainer = document.createElement('div')
        todoContainer.classList.add('todo-container')

        let checkbox = new Image()
        checkbox.src = Circle
        checkbox.classList.add('checkbox')
        todoContainer.appendChild(checkbox)

        let todoName = document.createElement('p')
        todoName.textContent = name
        todoName.classList.add('todo-name')
        todoContainer.appendChild(todoName)

        if(dueDate)
        {let todoDate = document.createElement('p')
        todoDate.textContent = format(dueDate, 'MMM do, y')
        todoDate.classList.add('todo-date')
        todoContainer.appendChild(todoDate)} else {
            let noDateMessage = document.createElement('p')
            noDateMessage.classList.add('todo-date')
            noDateMessage.textContent = "No due date"
            todoContainer.appendChild(noDateMessage)
        }

        let tagListContainer = document.createElement('div')
        tagListContainer.classList.add('tag-list-container')
        todoContainer.appendChild(tagListContainer)

        tagList.forEach(tag => {
            let tagUi = document.createElement('div')
            tagUi.textContent = tag.getName()
            tagUi.classList.add('tag-ui')
            tagListContainer.appendChild(tagUi)
        })

        let addTag = document.createElement('p')
        addTag.classList.add('add-tag')
        addTag.textContent = "Add tag"
        tagListContainer.appendChild(addTag)

        return todoContainer

    }

    const increaseTaskNumber = (() => {
        taskNumber++
    })()

    const getTaskId = () => taskId

    return { getName, setName, getDate, setDate, getCompletionState, getTags, addTags, removeTags, setCompleted, setUncompleted, getTaskId, build }
}

export default Todo