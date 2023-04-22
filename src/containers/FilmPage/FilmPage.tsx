import { FunctionComponent, useEffect, useState } from 'react';
import Films from '../../components/FilmPage';
import { getApiResource } from '../../utils/network';
import { getFilmsId, getFilmsImg } from '../../services/getFilmsData';
import { API_FILMS } from '../../constants/api';

const FilmPage: FunctionComponent<FilmPageProps> = (props) => {
	const {} = props;
	const [film, setFilm] = useState('')
	const getFilmResponse = async (url:string) => {
		const res = await getApiResource(url);
		if (res) {
			const filmList = res.results.map((name:string,url:string) => {
				const id = getFilmsId(url);
				const img = getFilmsImg(id);
				return {
					id, img,name
				}
			})
		
		setFilm(filmList)
		}
	}

	useEffect(()=> {
		getFilmResponse(API_FILMS)
	})

	return <div>
		<Films film={film}/>
	</div>;
};

export interface FilmPageProps {}

export default FilmPage;
