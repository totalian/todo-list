import Tag from "./tag.js"

const TagList = (() => {
    const tagList = []

    const addTag = tag => {
        tagList.push(tag)
        return tagList
    }

    const removeTag = tag => {
        let i = tagList.indexOf(tag)
        tagList.splice(i,1)
    }

    const getTagList = () => tagList

    // make an array of tag objects and nodes
    const build = () => {
        let tagListUi = []
        tagList.forEach(tag => {
            let tagListItem = document.createElement('div')
            tagListItem.classList.add('tag-list-item')
    
            let tagName = tag.getName()
            let tagListItemName = document.createElement('p')
            tagListItemName.textContent = tagName
            tagListItem.appendChild(tagListItemName)
    
            let todoCount = tag.todoCount()
            let tagListItemTodoCount = document.createElement('div')
            tagListItemTodoCount.classList.add('tag-list-item-todo-count')
            tagListItemTodoCount.textContent = todoCount
            tagListItem.appendChild(tagListItemTodoCount)
            
            tagListUi.push({tag,"node":tagListItem})
        })
        // add a click listener to each node 
        tagListUi.forEach(obj => {
            obj.node.addEventListener('click', e => {
                // first remove others from being bold
                tagListUi.forEach(otherObj => {
                    otherObj.node.classList.remove('emphasised')
                })
                // now make the one you clicked bold
                e.target.classList.add('emphasised')
                // run a function
                console.log(`clicked ${obj.tag.getName()} replace this with a function`)
            })
        })

        return tagListUi
    }



    return {getTagList,addTag,removeTag,build}
})()

export default TagList