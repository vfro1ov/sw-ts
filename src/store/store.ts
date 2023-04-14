import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import rootReduser from './redusers'
import { setLocalStorage } from '../utils/localStorage';
import favoriteReducer from './redusers/favoriteReduser';
const store = configureStore({
	reducer:{
		favoriteReducer:favoriteReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({})
})
store.subscribe(() => {
	setLocalStorage('store',store.getState().favoriteReducer)
});
export default store;