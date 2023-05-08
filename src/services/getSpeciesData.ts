import { GUIDE_IMG_EXTENTION, GUIDE__IMG_SPECIES, SWAPI_SPECIES} from "../constants/api";
import { getId } from "./getId"

export const getSpeciesId = (url:string) => getId(url,SWAPI_SPECIES) 
export const getSpeciesImg = (id:string) => `${GUIDE__IMG_SPECIES}/${id+GUIDE_IMG_EXTENTION}`;
	