//SWAPI
export const SWAPI_BASE = 'https://swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';

export const API_PEOPLE = SWAPI_BASE + SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const API_PERSON = SWAPI_BASE + SWAPI_PEOPLE;

//GUIDE
const GUIDE_BASE_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
const GUIDE_SPECIES = 'species';
const GUIDE_FILMS = 'films';
export const GUIDE_IMG_EXTENTION = '.jpg';
export const GUIDE_IMG_PEOPLE = GUIDE_BASE_IMG + GUIDE_PEOPLE;
export const GUIDE__IMG_SPECIES = GUIDE_BASE_IMG+ GUIDE_SPECIES;
export const GUIDE__IMG_FILMS = GUIDE_BASE_IMG + GUIDE_FILMS;