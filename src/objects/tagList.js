const TagList = (() => {
    const tagList = [tag1]

    const addTag = tag => {
        tagList.push(tag)
        return tagList
    }

    const removeTag = tag => {
        let i = tagList.indexOf(tag)
        tagList.splice(i,1)
    }

    const getTagList = () => tagList

    return {getTagList,addTag,removeTag}
})()

export default TagList