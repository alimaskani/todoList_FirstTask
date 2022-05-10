import React from "react";
import {createStore} from "redux";
import reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const Store = createStore(persistedReducer)
export const Persistor = persistStore(Store)


