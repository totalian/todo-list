const TagList = (() => {
    // just the list of tags
    const tagList = []

    // list of objects: {tag,node}
    const tagListUi = []

    const addTag = tag => {
        tagList.push(tag)
        return tagList
    }

    const removeTag = tag => {
        let i = tagList.indexOf(tag)
        tagList.splice(i, 1)
    }

    const getTagList = () => tagList

    const deselectTags = () => {
        tagListUi.forEach(obj => {
            obj.node.firstChild.classList.remove('emphasised')
            obj.node.classList.remove('emphasised')
        })
    }

    const selectTag = obj => {
        obj.node.classList.add('emphasised')
        return obj.tag
    }

    // takes the tag list and returns the taglistUI + build dom elements
    const buildTagListUi = () => {
        while(tagListUi.length){tagListUi.pop()}
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

            tagListUi.push({ tag, "node": tagListItem })
        })
        return tagListUi
    }

    // add click listeners
    const addEventListeners = () => {
        tagListUi.forEach(obj => {
            obj.node.addEventListener('click', e => {
                deselectTags()
                selectTag(obj)
            })
        })
    }

    const build = () => {
        const tagList = buildTagListUi()
        addEventListeners()
        return tagList
    }




    return { getTagList, addTag, removeTag, build, selectTag, tagListUi }
})()

export default TagList