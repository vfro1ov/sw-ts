import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface FavoriteState {
  name: string;
	img: string;
}

// Define the initial state using that type
const initialState: FavoriteState = {
  name: '',
	img: '',
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFavorites: (state) => {
    },
    removeFavorites: (state) => {
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<any>) => {
    },
  },
})

export const { setFavorites, removeFavorites, incrementByAmount } = FavoriteSlice.actions

export const selectFavorite = (state: RootState) => state.favorites

export default FavoriteSlice.reducer