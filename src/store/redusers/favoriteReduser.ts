import {omit} from 'lodash';
import { getLocalStorage } from "../../utils/localStorage";
import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_TO_FAVORITES } from "../constants/actionTypes";

const initialState = getLocalStorage('store')

const favoriteReducer = (state=initialState,action:any) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITES:
			return {
				state,
				...action.payload
			}
			case REMOVE_PERSON_TO_FAVORITES:
				return omit(state,[action.payload])
	
		default:
			break;
	}
}
export default favoriteReducer;

