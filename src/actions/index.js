
const framesLoaded = (newFrames) => {
    return {
        type: 'FETCH_FRAMES_SUCCESS',
        payload: newFrames
    }
}
const framesRequested = () => {
    return {
        type: 'FETCH_FRAMES_REQUEST'
    }
}
const widthChanged = (id, width) => {
    return {
        type: 'WIDTH_UPDATE',
        payload: id,
        width: width
    }
}
const heightChanged = (id, height) => {
    return {
        type: 'HEIGHT_UPDATE',
        payload: id,
        height: height
    }
}
const framesError = (error) => {
    return{
        type: 'FRAMES_FAILURE',
        payload: error
    }
}

export {
    framesLoaded,
    framesRequested,
    framesError,
    widthChanged,
    heightChanged,
}