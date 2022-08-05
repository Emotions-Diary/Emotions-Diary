import { configureStore, combineReducers } from '@reduxjs/toolkit';
import emotion from './modules/emotion';

const rootReducer = combineReducers({ emotion });
const store = configureStore({ reducer: rootReducer });

export default store;
 