const Tag = () => {
    let name
    const setName = newName => {
        name = newName
    }

    const getName = () => name

    return {getName, setName}
}

export default Tag