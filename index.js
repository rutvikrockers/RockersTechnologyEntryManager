import thunkMiddleware from 'redux-thunk'
import React, {Component} from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';
import Routes from './src/routes/';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from "./src/reducers";
import { persistStore, persistCombineReducers } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import storage from 'redux-persist/lib/storage'
import { login } from './src/actions'
import LoadingView from './src/components/shared/loading';

const config = {
  key: 'theCrowd',
  storage,
  blacklist: ['error', 'modal', 'video'],
}

let reducers = persistCombineReducers(config, reducer);

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

let persistor = persistStore(store);

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
