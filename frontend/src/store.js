import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/user/userSlice';
import storageSession from 'redux-persist/lib/storage/session';


import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  user: userSlice,
});

const rootPersistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
});

export default store;
