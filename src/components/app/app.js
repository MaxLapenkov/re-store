import React from 'react'
import ErrorBoundary from '../error-boundary/'
import { Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages/'
const App = () =>{
        return (
            <ErrorBoundary>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/cart" component={CartPage}/>
                </Switch>  
            </ErrorBoundary>
        )  
}

export default App