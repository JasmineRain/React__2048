import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route,Redirect } from 'react-router-dom'
import Rank from './containers/Rank'
import configureStore from './store'

//const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" >
                    <Redirect from="/" to='game'/>
                </Route>
                <Route path="/game" component={App}/>
                <Route path='/rank' component={Rank}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
