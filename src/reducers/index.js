const initialState = {
    frames: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FRAMES_LOADED':
            return {
                frames: action.payload
            };
        default:
            return state;
    }
    
}

export default reducer