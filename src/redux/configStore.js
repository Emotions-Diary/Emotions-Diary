import { configureStore, combineReducers } from '@reduxjs/toolkit';
import emotion from './modules/emotion';
import user from './modules/user';
import comment from './modules/comment'

const rootReducer = combineReducers({ emotion, user, comment });
const store = configureStore({ reducer: rootReducer });

export default store;
