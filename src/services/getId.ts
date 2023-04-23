import { SWAPI_BASE } from '../constants/api';

export const getId = (url: string, category: string) => {
	const id = url.replace(SWAPI_BASE + category, '').replace(/\//g, '');
	return id;
}

export const getFilm = (url: string) => {
	const urlParts = url.split('/');
  const id = urlParts[urlParts.length - 2]; // последний элемент до /
  return id;
}