import { GUIDE_IMG_EXTENTION, GUIDE__IMG_FILMS,  SWAPI_FILMS } from '../constants/api';
import { getId } from './getId';

export const getFilmsId = (url: string) => getId(url, SWAPI_FILMS);
export const getFilmsImg = (id: string) => `${GUIDE__IMG_FILMS}/${id + GUIDE_IMG_EXTENTION}`;
