const middle = (array) => {
    if (array.length <= 2) {
        return []
    }
    if (array.length % 2 !== 0) {
        return [Math.floor(array.length / 2) + 1]
    } else {
        return [Math.floor(array.length / 2), Math.floor(array.length / 2) + 1]
    }
}

module.exports = middle;