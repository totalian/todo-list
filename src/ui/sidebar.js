import AddIcon from '../assets/addIcon.png'
import TagList from '../objects/tagList.js'
import AddTagModal from './addTagModal.js'
import Body from './body.js'
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

    title.addEventListener('click', () => {
        let fullTaskList = TodoList.getTodoList()
        TagList.deselectTags()
        Body.updateTitle("My Task List")
        Body.updateCurrentTodos(fullTaskList)
        Body.renderTodoList()
    })

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

    const clearTagList = () => {
        while(tagListSection.firstChild.nextSibling){
            tagListSection.lastChild.remove()
        }
    }

    // add actual tag list
    const renderTagList = () => {
        clearTagList()
        let tagList = TagList.build()
        tagList.forEach(obj => {
            tagListSection.appendChild(obj.node)
        })
    }
    renderTagList()

    // COMPLETED
    const completed = document.createElement('p')
    completed.classList.add('emphasised')
    completed.textContent = "Completed"
    sidebar.appendChild(completed)

    // ADD TAG BUTTON EVENT LISTENER
    addIcon.addEventListener('click', () => {
        AddTagModal.display()
    })

    return { sidebar, renderTagList }
})()

export default Component