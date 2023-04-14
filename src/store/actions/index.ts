import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_TO_FAVORITES } from '../constants/actionTypes';

export const setPersonToFavorites = (person: any) => ({
	type: ADD_PERSON_TO_FAVORITES,
	payload: person,
});

export const removePersonToFavorites = (personId: any) => ({
	type: REMOVE_PERSON_TO_FAVORITES,
	payload: personId,
});
