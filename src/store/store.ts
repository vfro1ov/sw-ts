import {configureStore } from '@reduxjs/toolkit';
import favorites from './features/favorites';
// import rootReduser from './redusers'
const store = configureStore({
	reducer:{
		favorites:favorites
	},
	devTools:true
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch