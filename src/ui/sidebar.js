import AddIcon from '../assets/addIcon.png'
import TagList from '../objects/tagList.js'
import TodoList from '../objects/todoList.js'

const Component = (() => {
    // CONTAINER
    const sidebar = document.createElement('div')
    sidebar.classList.add('side-bar')

    // TITLE
    const title = document.createElement('p')
    title.classList.add('emphasised')
    title.textContent = "My Todo List"
    sidebar.appendChild(title)

    // TAG LIST

    // make the tag list
    const tagListSection = document.createElement('div')
    tagListSection.classList.add('tag-list')
    sidebar.appendChild(tagListSection)

    // add title and add button to tag list
    const tagListTitleItem = document.createElement('div')
    tagListTitleItem.classList.add('tag-list-item')
    tagListSection.appendChild(tagListTitleItem)

    const tagListTitle = document.createElement('p')
    tagListTitle.classList.add('sub-text')
    tagListTitle.textContent = "Tags"
    tagListTitleItem.appendChild(tagListTitle)

    const addIcon = new Image()
    addIcon.src = AddIcon
    tagListTitleItem.appendChild(addIcon)
    
    // add the tags and the number of tasks to the tag list
    
    // helper function to get the number of todos for a given list
    const tagListTodoCount = tag => {
        let todosWithTag = TodoList.getTodoList().filter(todo => {
            return todo.tagList.includes(tag)
        })
        return todosWithTag.length
    }

    TagList.getTagList().forEach(tag => {
        let tagListItem = document.createElement('div')
        tagListItem.classList.add('tag-list-item')
        tagListSection.appendChild(tagListItem)

        let tagName = tag.getName()
        let tagListItemName = document.createElement('p')
        tagListItemName.textContent = tagName
        tagListItem.appendChild(tagListItemName)

        let todoCount = tagListTodoCount(tag)
        let tagListItemTodoCount = document.createElement('div')
        tagListItemTodoCount.classList.add('tag-list-item-todo-count')
        tagListItemTodoCount.textContent = todoCount
        tagListItem.appendChild(tagListItemTodoCount)



    })

    return sidebar
})()

export default Component