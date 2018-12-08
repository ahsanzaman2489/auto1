import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/';

const configureStore = preloadedState => {
    const enhancers = [];

    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    return createStore(
        reducers,
        applyMiddleware(thunk),
        preloadedState,
        compose(
            ...enhancers
        )
    );
};

export default configureStore;
