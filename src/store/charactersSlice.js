import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addFavorite(state, action) {
            if (state.favorites.length < 10) {
                state.favorites.push(action.payload);
            } 
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(
                (character) => character.id !== action.payload.id
            );
        },
    },
});

export const { addFavorite, removeFavorite } = charactersSlice.actions;
export default charactersSlice.reducer;
