import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Person {
  id: string;
	name: string;
	photo: string;
}
interface State {
	favorite: { [key: string]: Person };
}

// Define the initial state using that type
const initialState: State = {
	favorite: {},
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFavorites: (state, action) => {
			const person = action.payload;
      state.favorite[person.id] = person;
    },
    removeFavorites: (state,action) => {
			const personId = action.payload;
			delete state.favorite[personId];
    },
  },
})

export const { setFavorites, removeFavorites } = FavoriteSlice.actions

export const selectFavorite = (state: RootState) => state.favorites

export default FavoriteSlice.reducer