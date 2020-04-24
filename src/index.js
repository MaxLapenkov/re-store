import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/';
import ErrorBoundary from './components/error-boundary/';
import FrameStoreService from './services/frame-store-service';
import {FrameStoreServiceProvider} from './components/frame-store-service-context';
import store from './store'

const frameStoreService = new FrameStoreService();

ReactDOM.render(
<Provider store = {store}>
    <ErrorBoundary>
        <FrameStoreServiceProvider value={frameStoreService}>
            <Router>
                <App/>
            </Router>
        </FrameStoreServiceProvider>
    </ErrorBoundary>
</Provider>,
 document.getElementById('root'))

