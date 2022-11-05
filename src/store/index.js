import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [reduxImmutableStateInvariant(), thunk];

const persistConfig = {
  key: 'tvshows',
  storage: AsyncStorage,
  blacklist: [
    'list',
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store)

export {
  store,
  persistor
};
