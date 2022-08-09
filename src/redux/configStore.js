import { configureStore, combineReducers } from '@reduxjs/toolkit';
import emotion from './modules/emotion';
import user from './modules/user';

const rootReducer = combineReducers({ emotion, user});
const store = configureStore({ reducer: rootReducer,  });

export default store;
