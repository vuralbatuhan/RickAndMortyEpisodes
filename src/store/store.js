import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './charactersSlice';

const store = configureStore({
    reducer: {
        characters: charactersSlice,
    },
});

export default store;
