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
        for(let i = 0; i < removedTags.length; i++){
            let positionToRemove = tagList.indexOf(i)
            tagList.splice(positionToRemove,1)
        }
    }

    const increaseTaskNumber = (() => {
        taskNumber++
    })()

    const getTaskId = () => taskId

    return {getName,setName,getDate,setDate,getCompletionState,getTags,addTags,removeTags,setCompleted,setUncompleted,getTaskId}
}

export default Todo