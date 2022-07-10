import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/user/userSlice';
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  user: userSlice,
});

const rootPersistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(rootPersistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
