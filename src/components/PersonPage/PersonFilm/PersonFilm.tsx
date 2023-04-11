import { FunctionComponent, useEffect, useState } from 'react';
import { makeConCorrentRequest } from '../../../utils/network';
import './PersonFilm.scss'
const PersonFilm: FunctionComponent<PersonFilmProps> = (props) => {
	const { personFilm } = props;
	const [film, setFilm] = useState<any[]>();
	useEffect(() => {
		(async () => {
			const res = await makeConCorrentRequest(personFilm);
			setFilm(res);
		})();
	});

	return (
		<div className='card_film'>
			{film?.map(({ title }) => (
				<li>{title}</li>
			))}
		</div>
	);
};

export interface PersonFilmProps {
	personFilm: any;
}
export default PersonFilm;
