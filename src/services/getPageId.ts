import {SWAPI_PARAM_PAGE} from '../constants/api'

export const getPageId = (url:string) => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
	return Number(id)
}