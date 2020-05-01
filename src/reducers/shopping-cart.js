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
        if(frame.width >= 10 && frame.height >= 10) {
            return {
                id: frame.id,
                name: frame.name,
                count: 1,
                width: frame.width,
                height: frame.height,
                total: Math.round(frame.width*frame.height*frame.price/100),
                price: frame.price
            };
        } else{
            return {
                id: frame.id,
                name: 'Введите ширину и высоту больше 10',
                count: 1
            }
        }
        
    }
}
const updateOrder = (state, frameId, quantity) => {
    const {frameList: {frames},shoppingCart: {cartItems}} = state
    const frame = frames.find((frame) => frame.id === frameId)
    const cartItemIndex = cartItems.findIndex(({id}) => id === frameId)
    const cartItem = cartItems[cartItemIndex]
    
    const newItem = updateCartItem(frame, cartItem, quantity)
    const newCartItems = updateCartItems(cartItems, newItem, cartItemIndex)
    const orderTotal = Object.values(newCartItems).reduce((t, {total}) => t + total, 0)
    const cartItemsTotal = Object.values(newCartItems).reduce((t, {count}) => t + count, 0)
        return {
        orderTotal: orderTotal,
        cartItems: newCartItems,
        cartItemsTotal: cartItemsTotal
        }
}


const updateShoppingCart = (state, action) => {
    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            cartItemsTotal: 0
        }
    }
    switch(action.type) {
        case 'FRAME_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)
           
        case 'FRAME_DELETED_FROM_CART':
            return updateOrder(state, action.payload, -1)
        case 'ALL_FRAMES_DELETED_FROM_CART':
            const itemToDelete = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -itemToDelete.count)
        default:
            return state.shoppingCart;
     }
}
export default updateShoppingCart