import { FunctionComponent, useEffect, useState } from 'react';
import Films from '../../components/FilmPage';
import { getApiResource } from '../../utils/network';
import { getFilmsId, getFilmsImg } from '../../services/getFilmsData';
import { API_FILMS } from '../../constants/api';

const FilmPage: FunctionComponent<FilmPageProps> = (props) => {
	const {} = props;
	const [film, setFilm] = useState<any>();
	const getFilmResponse = async (url: string) => {
		const res = await getApiResource(url);
		console.log(res)
		if (res) {
			const filmList = res.results.map((title: string, url: string, episode_id: string) => {
				const id = getFilmsId(url);
				const img = getFilmsImg(id) ;
				console.log(id)
				return {
					id,
					img,
					title,
					url,
					episode_id
				};
			});

			setFilm(filmList);
		}
	};

	useEffect(() => {
		getFilmResponse(API_FILMS);
	},[]);

	return (
		<div>
			<Films film={film} />
		</div>
	);
};

export interface FilmPageProps {}

export default FilmPage;
