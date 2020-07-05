import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default store;
