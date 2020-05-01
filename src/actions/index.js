
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
const frameAddedToCart = (frameId) => {
    return {
        type: 'FRAME_ADDED_TO_CART',
        payload: frameId
    }
}
const frameDeletedfromCart = (frameId) => {
    return {
        type: 'FRAME_DELETED_FROM_CART',
        payload: frameId
    }
}
const allFramesDeletedfromCart = (frameId) => {
    return {
        type: 'ALL_FRAMES_DELETED_FROM_CART',
        payload: frameId
    }
}

export {
    framesLoaded,
    framesRequested,
    framesError,
    widthChanged,
    heightChanged,
    frameAddedToCart,
    frameDeletedfromCart,
    allFramesDeletedfromCart
}