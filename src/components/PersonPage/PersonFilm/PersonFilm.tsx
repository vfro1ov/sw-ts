import { FunctionComponent, useEffect, useState } from 'react';
import { makeConCorrentRequest } from '../../../utils/network';
import './PersonFilm.scss';
const PersonFilm: FunctionComponent<PersonFilmProps> = (props) => {
	const { personFilm } = props;
	const [film, setFilm] = useState<any[]>();
	useEffect(() => {
		(async () => {
			const res = await makeConCorrentRequest(personFilm);
			setFilm(res);
		})();
	},[personFilm]);

	return (
		<div className="card_film">
			{film
				?.sort((a, z) => a.episode_id - z.episode_id)
				.map(({ title, episode_id }) => (
					<li key={episode_id}>
						Episode {episode_id} - {title} 
					</li>
				))}
		</div>
	);
};

export interface PersonFilmProps {
	personFilm: any;
}
export default PersonFilm;
