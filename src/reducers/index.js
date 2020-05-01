import updateFrameList from './frame-list'
import updateShoppingCart from './shopping-cart'

const reducer = (state, action) => {
    return {
        frameList: updateFrameList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    }   
}

export default reducer