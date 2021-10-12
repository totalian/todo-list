import AddIcon from '../assets/addIcon.png'
import TagList from './tagList.js'


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
    
    // add actual tag list
    let tagList = TagList.buildTagList()
    tagList.forEach(tag => {
        tagListSection.appendChild(tag.node)
    })

    // COMPLETED
    const completed = document.createElement('p')
    completed.classList.add('emphasised')
    completed.textContent = "Completed"
    sidebar.appendChild(completed)

    return sidebar
})()

export default Component