import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Person {
	id: string;
	name: string;
	img: string;
}
interface State {
	[keys:string]: Person[]
}
const initialState: State = {
	favorite : []
};

export const FavoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: ( state, action) => {
			const person = action.payload;
			state.favorite = person;
		},
		removeFavorites: (state, action) => {
			const personId = action.payload;
			delete state.favorite[personId];
		},
	},
});

export const { setFavorites, removeFavorites } = FavoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorites;

export default FavoriteSlice.reducer;
