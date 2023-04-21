import {configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import favoritesReducer, { setFavorites, removeFavorites} from './features/favorites';
// import rootReduser from './redusers'

const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
	matcher: isAnyOf(setFavorites, removeFavorites),
    effect: () => {
			return (
				localStorage.setItem('favorites', JSON.stringify(store.getState().favorites))
			);
		}
})

const store = configureStore({
	reducer:{
		favorites:favoritesReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch