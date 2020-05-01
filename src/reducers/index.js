const initialState = {
    frames: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}
const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    } 
    if(idx === -1) {
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
}
const updateCartItem = (frame, cartItem, quantity) => {
    if(cartItem) {
        return {
            ...cartItem,
            count: cartItem.count + quantity,
            total: cartItem.total + quantity*Math.round(cartItem.width*cartItem.height*cartItem.price/100)
        };

    } else {
        return {
            id: frame.id,
            name: frame.name,
            count: 1,
            width: frame.width,
            height: frame.height,
            total: Math.round(frame.width*frame.height*frame.price/100),
            price: frame.price
        };
    }
}
const updateOrder = (state, frameId, quantity) => {
    const {frames, cartItems} = state
    const frame = frames.find((frame) => frame.id === frameId)
    const cartItemIndex = cartItems.findIndex(({id}) => id === frameId)
    const cartItem = cartItems[cartItemIndex]
          
    const newItem = updateCartItem(frame, cartItem, quantity)
        return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, cartItemIndex)
        }
}

const reducer = (state = initialState, action) => {
    const frameId = action.payload
    const itemIndex = state.frames.findIndex(({id}) => id === frameId)
    const item = state.frames[itemIndex];
    const height = action.height
    const width = action.width
    switch(action.type) {
        case 'HEIGHT_UPDATE':

            let newItemHeight = {
                ...item,
                height: height,
                id: item.id+100
            }
            let newFramesHeight = [
                ...state.frames.slice(0, itemIndex),
                newItemHeight,
                ...state.frames.slice(itemIndex + 1)
            ]
            
            return {
                ...state,
                frames: newFramesHeight
            }
        case 'WIDTH_UPDATE':
            
            
            
            
            let newItemWidth = {
                ...item,
                width: width,
                id: item.id+100
            }
            let newFramesWidth = [
                ...state.frames.slice(0, itemIndex),
                newItemWidth,
                ...state.frames.slice(itemIndex + 1)
            ]
            
            return {
                ...state,
                frames: newFramesWidth
            }
        case 'FETCH_FRAMES_REQUEST':
            return {
                ...state,
                frames: [],
                loading: true,
                error: null
            }
        case 'FETCH_FRAMES_SUCCESS':
            return {
                ...state,
                frames: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_FRAMES_FAILURE': 
            return {
                ...state,
                frames: [],
                loading: false,
                error: action.payload
            }
        case 'FRAME_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
        case 'FRAME_DELETED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_FRAMES_DELETED_FROM_CART':
            const itemToDelete = state.cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -itemToDelete.count)
            
            
        default:
            return state;
    }
    
}


export default reducer