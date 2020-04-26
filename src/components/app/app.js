import React from 'react'
import ErrorBoundary from '../error-boundary/'
import { Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages/'
import ShopHeader from '../shop-header'
const App = () =>{
        return (
            
            <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
            <ErrorBoundary>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/cart" component={CartPage}/>
                </Switch>  
            </ErrorBoundary>
            </main>
        )  
}

export default App