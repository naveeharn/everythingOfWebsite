
function getCurrentTime() {
    return new Date().toUTCString()
}

function sum(x, y) {
    return x + y
}

// const _getCurrentTime = getCurrentTime
// export { _getCurrentTime as getCurrentTime }

module.exports.getCurrentTime = getCurrentTime
module.exports.sum = sum