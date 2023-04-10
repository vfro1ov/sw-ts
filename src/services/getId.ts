import { SWAPI_BASE } from '../constants/api';

export const getId = (url: string, category: string) => {
	const id = url.replace(SWAPI_BASE + category, '').replace(/\//g, '');
	return id;
};

