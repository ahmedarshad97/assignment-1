import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import blogsReducer from './blogsSlice';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
  middleware,
});

export default store;