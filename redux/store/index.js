import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducers from '../reducers';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = (initialState = {}) => {
  let store;
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage
    };

    store = createStore(
      persistReducer(persistConfig, reducers),
      initialState,
      bindMiddleware([thunk, sagaMiddleware])
    );

     store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      reducers,
      initialState,
      bindMiddleware([thunk, sagaMiddleware])
    );

  }
  
  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();
  return store;
}

export default configureStore;
