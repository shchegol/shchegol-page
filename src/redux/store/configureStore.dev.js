import { createStore, compose} from 'redux';
import DevTools from 'components/DevTools';
import rootReducer from 'redux/reducers/index';

const enhancer = compose(
    DevTools.instrument()
);

export default function (initialState = {}) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index').default;
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}