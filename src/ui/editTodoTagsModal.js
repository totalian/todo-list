import TagList from '../objects/tagList'
import Body from './body'
import Sidebar from './sidebar'

const Component = (() => {
    const modal = document.createElement('div')
    modal.classList.add("modal","hidden")

    const modalContent = document.createElement('div')
    modalContent.classList.add("modal-content")
    modal.appendChild(modalContent)

    const modalTitle = document.createElement('p')
    modalTitle.classList.add('large-title','modal-header')
    modalTitle.textContent = "Edit Tags"
    modalContent.appendChild(modalTitle)

    const makeTagListContainer = todo => {
        let tagListContainer = document.createElement('div')
        tagListContainer.classList.add('edit-tag-list-container')
        let tagList = TagList.getTagList()
        let todoTagList = todo.getTags()
        let taskTagList = []
        tagList.forEach(tag => {
            let tagSelector = {}
            tagSelector.node = document.createElement('div')
            tagSelector.node.classList.add('edit-tag-list-tag')
            tagSelector.node.textContent = tag.getName()
            tagListContainer.appendChild(tagSelector.node)
            if(todoTagList.includes(tag)){
                tagSelector.node.classList.add('tag-selected')
            }
            tagSelector.node.addEventListener('click',() => {
                tagSelector.node.classList.toggle('tag-selected')
            })
            tagSelector.tag = tag
            taskTagList.push(tagSelector)
        })

        return {taskTagList,tagListContainer}
    }

    const saveBtn = document.createElement('button')
    saveBtn.textContent = "Save"
    saveBtn.classList.add('btn','saveBtn')

    const clearContainer = () => {
        let currentContainer = document.querySelector('.edit-tag-list-container')
        if(currentContainer) {modalContent.removeChild(currentContainer)}
    }

    const hide = () => {
        modal.classList.add("hidden")
    }

    // hide modal by clicking in the background
    modal.addEventListener('click',e => {
        if(e.target.classList == "modal"){
            hide()
        }
    })

    const render = todo => {
        clearContainer()
        let todoTags = makeTagListContainer(todo)
        modalContent.appendChild(todoTags.tagListContainer)
        modal.classList.remove('hidden')
        modalContent.appendChild(saveBtn) 
        saveBtn.addEventListener('click', () => {
            todo.removeAllTags()
            let tagsToAdd = []
            todoTags.taskTagList.forEach(tagSelector => {
                if(tagSelector.node.classList.contains('tag-selected')){
                    tagsToAdd.push(tagSelector.tag)
                }
            })
            todo.addTags(tagsToAdd)
            Body.renderTodoList()
            Sidebar.renderTagList()
            hide()
        })
    }

    return { modal, render, hide }
})()

export default Component