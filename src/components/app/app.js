import React from 'react'
import ErrorBoundary from '../error-boundary/'
import { Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages/'
import ShopHeader from '../shop-header'
import {connect} from 'react-redux'
const App = ({orderTotal, cartItemsTotal}) =>{
        return (
            
            <main role="main" className="container">
            <ShopHeader numItems={cartItemsTotal} total={orderTotal}/>
            <ErrorBoundary>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/cart" component={CartPage}/>
                </Switch>  
            </ErrorBoundary>
            </main>
        )  
}
const mapStateToProps = ( {orderTotal, cartItemsTotal}) => {
    return{orderTotal, cartItemsTotal}
}
export default connect(mapStateToProps)(App)