import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';
import PersonFilm from '../../components/PersonPage/PersonFilm';
import PersonInfo from '../../components/PersonPage/PersonInfo';

import './PersonPage.scss';
const PersonPage: FunctionComponent<PersonPageProps> = (props) => {
	const {} = props;
	// const [person, setPerson] = useState<any[]>([]);
	const [personInfo, setPersonInfo] = useState<any>();
	const [personFilm, setPersonFilm] = useState<any>();
	const [personId, setPersonId] = useState<string | undefined>();

	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			setPersonId(id);
			setPersonInfo([
				{ title: 'Name', data: res.name },
				{ title: 'Gender', data: res.gender },
				{ title: 'Hair_color', data: res.hair_color },
				{ title: 'Skin color', data: res.skin_color },
				{ title: 'Eye color', data: res.eye_color },
				{ title: 'Mass', data: res.mass },
			]);
			setPersonFilm(res.films);
		})();
	}, [id]);

	return (
		<div>
			<div className='person_wrapper'>
				<div className='person_info'>
					<h3>Info</h3>
				<PersonInfo personInfo={personInfo} />
				</div>
				<div className='person_films'>
				<h3>Films</h3>
				<PersonFilm personFilm={personFilm} />
				</div>
			</div>
		</div>
	);
};

export interface PersonPageProps {}

export default PersonPage;
