// TAG LIST WHICH GOES IN SIDEBAR
import TagList from "../objects/tagList"
import TodoList from "../objects/todoList"

// helper function to get the number of todos for a given list
const tagListTodoCount = tag => {
    let todosWithTag = TodoList.getTodoList().filter(todo => {
        return todo.getTags().includes(tag)
    })
    return todosWithTag.length
}

const buildTagList = () => {
    let taglist = []
    TagList.getTagList().forEach(tag => {
        console.log(tag)
        let tagListItem = document.createElement('div')
        tagListItem.classList.add('tag-list-item')

        let tagName = tag.getName()
        let tagListItemName = document.createElement('p')
        tagListItemName.textContent = tagName
        tagListItem.appendChild(tagListItemName)

        let todoCount = tagListTodoCount(tag)
        let tagListItemTodoCount = document.createElement('div')
        tagListItemTodoCount.classList.add('tag-list-item-todo-count')
        tagListItemTodoCount.textContent = todoCount
        tagListItem.appendChild(tagListItemTodoCount)
        
        taglist.push({tag,"node":tagListItem})
    })

    return taglist
}

export default {buildTagList}