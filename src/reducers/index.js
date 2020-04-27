const initialState = {
    frames: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'HEIGHT_CHANGED':
            const framehId = action.payload
            const height = action.height
            const itemhIndex = state.frames.findIndex(({id}) => id === framehId)
            const itemh = state.frames[itemhIndex];
            let newItemh = {
                ...itemh,
                height: height
            }
            let newFramesh = [
                ...state.frames.slice(0, itemhIndex),
                newItemh,
                ...state.frames.slice(itemhIndex + 1)
            ]
            
            return {
                ...state,
                frames: newFramesh
            }
        case 'WIDTH_CHANGED':
            const frameId = action.payload
            const width = action.width
            const itemIndex = state.frames.findIndex(({id}) => id === frameId)
            const item = state.frames[itemIndex];
            let newItem = {
                ...item,
                width: width
            }
            let newFrames = [
                ...state.frames.slice(0, itemIndex),
                newItem,
                ...state.frames.slice(itemIndex + 1)
            ]
            
            return {
                ...state,
                frames: newFrames
            }
        case 'FRAMES_REQUESTED':
            return {
                frames: [],
                loading: true,
                error: null
            }
        case 'FRAMES_LOADED':
            return {
                frames: action.payload,
                loading: false,
                error: null
            };
        case 'FRAMES_ERROR': 
            return {
                frames: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
    
}


export default reducer