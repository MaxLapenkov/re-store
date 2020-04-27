
const framesLoaded = (newFrames) => {
    return {
        type: 'FRAMES_LOADED',
        payload: newFrames
    }
}
const framesRequested = () => {
    return {
        type: 'FRAMES_REQUESTED'
    }
}
const widthChanged = (id, width) => {
    return {
        type: 'WIDTH_CHANGED',
        payload: id,
        width: width
    }
}
const heightChanged = (id, height) => {
    return {
        type: 'HEIGHT_CHANGED',
        payload: id,
        height: height
    }
}
const framesError = (error) => {
    return{
        type: 'FRAMES_ERROR',
        payload: error
    }
}
export {
    framesLoaded,
    framesRequested,
    framesError,
    widthChanged,
    heightChanged
}