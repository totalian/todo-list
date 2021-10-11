const todo = (name,dueDate,...tags) => {
    const isCompleted = false
    const tagList = [...tags]

    const setCompleted = () => {
        isCompleted = true
    }

    const setUncompleted = () => {
        isCompleted = false
    }

    const addTags = (...newTags) => {
        tagList.push(...newTags)
    }

    const removeTags = (...remvovedTags) => {
        for(let i = 0; i < removedTags.length; i++){
            tagList.splice(i,1)
        }
    }

    return {name,dueDate,isCompleted,tagList,addTags,removeTags,setCompleted,setUncompleted}
}