
const framesLoaded = (newFrames) => {
    return {
        type: 'FRAMES_LOADED',
        payload: newFrames
    }
}

export {
    framesLoaded
}