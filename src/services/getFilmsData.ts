import { GUIDE_IMG_EXTENTION, GUIDE__IMG_FILMS,  SWAPI_FILMS } from '../constants/api';
import { getFilm, getId } from './getId';

export const getFilmsId = (url: string) => getFilm(url);
export const getFilmsImg = (id: string) => `${GUIDE__IMG_FILMS}+/${id}${GUIDE_IMG_EXTENTION}`;
