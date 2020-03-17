import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './reducer/rootReducer';
import rootSaga from './reducer/rootSaga';

const sagaMonitor =
    process.env.ENV_DEV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
