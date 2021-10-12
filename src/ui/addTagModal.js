import Tag from "../objects/tag.js"
import TagList from "../objects/tagList.js"
import Sidebar from './sidebar.js'

const Component = (() => {
    const modal = document.createElement('div')
    modal.classList.add("modal","hidden")

    const modalContent = document.createElement('div')
    modalContent.classList.add("modal-content")
    modal.appendChild(modalContent)

    const modalTitle = document.createElement('p')
    modalTitle.classList.add('large-title','modal-header')
    modalTitle.textContent = "Add New Tag"
    modalContent.appendChild(modalTitle)

    const newTagInput = document.createElement('input')
    newTagInput.type = "text"
    newTagInput.classList.add("modal-input")
    newTagInput.placeholder = "Enter new tag name"
    modalContent.appendChild(newTagInput)

    const btn = document.createElement('button')
    btn.classList.add("btn")
    btn.textContent = "Save"
    modalContent.appendChild(btn)

    const display = () => {
        modal.classList.remove("hidden")
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

    // clear the form, create a tag and hide the modal when you click save
    btn.addEventListener('click', e => {
        let newTag = Tag()
        let newTagName = newTagInput.value
        newTag.setName(newTagName)
        TagList.addTag(newTag)
        TagList.getTagList().forEach(tag => {
            console.log(tag.getName())
        })
        newTagInput.value = ""
        Sidebar.buildTagListUI()
        hide()
    })

    return {modal,display}
})()

export default Component