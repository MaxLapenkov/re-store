const updateFrameList = (state, action) => {
    if(state === undefined) {
        return {
            frames: [],
            loading: true,
            error: null,
        }
    }  
    const frameId = action.payload
    const itemIndex = state.frameList.frames.findIndex(({id}) => id === frameId)
    const item = state.frameList.frames[itemIndex];
    const height = action.height
    const width = action.width

    
    switch(action.type) {
        case 'FETCH_FRAMES_REQUEST':
            return {
                frames: [],
                loading: true,
                error: null
            }
        case 'FETCH_FRAMES_SUCCESS':
            return {
                frames: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_FRAMES_FAILURE': 
            return {
                frames: [],
                loading: false,
                error: action.payload
            }
        case 'HEIGHT_UPDATE':
            let newItemHeight = {
                ...item,
                height: height,
                id: item.id+1000
            }
            let newFramesHeight = [
                ...state.frameList.frames.slice(0, itemIndex),
                newItemHeight,
                ...state.frameList.frames.slice(itemIndex + 1)
            ]
            
        return {
                frames: newFramesHeight
        }
        case 'WIDTH_UPDATE':
            let newItemWidth = {
                ...item,
                width: width,
                id: item.id+1000
            }
            let newFramesWidth = [
                ...state.frameList.frames.slice(0, itemIndex),
                newItemWidth,
                ...state.frameList.frames.slice(itemIndex + 1)
            ]
            
            return {
                frames: newFramesWidth
            }
        default:
            return state.frameList;
    }
}

export default updateFrameList