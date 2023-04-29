import feedReducer from '../features/feedSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        feed : feedReducer
    }
});

export default store;