import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';
import PersonFilm from '../../components/PersonPage/PersonFilm';
import PersonInfo from '../../components/PersonPage/PersonInfo';

import './PersonPage.scss';
import { getPeopleImg } from '../../services/getPeopleData';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
const PersonPage: FunctionComponent<PersonPageProps> = (props) => {
	const {} = props;


	// const [person, setPerson] = useState<any[]>([]);
	const [personInfo, setPersonInfo] = useState<any>();
	const [personName, setPersonName] = useState<string>();
	const [personPhoto, setPersonPhoto] = useState<string>();
	const [personFilm, setPersonFilm] = useState<any>();
	const [personId, setPersonId] = useState<string>();

	type IdParams = {
		id: string;
	}

	const { id } = useParams() as { id: string };

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
			setPersonPhoto(getPeopleImg(id))
			setPersonName(res.name)
			console.log(res)
		})();
	}, [id]);

	return (
			<div className='person'>
				<div className="person_photo">
					<h3>{personName}</h3>
					<PersonPhoto personPhoto={personPhoto}/>
				</div>
				<div className='person_info'>
					<h3>Info</h3>
				<PersonInfo personInfo={personInfo} />
				</div>
				<div className='person_films'>
				<h3>Films</h3>
				<PersonFilm personFilm={personFilm} />
				</div>
			</div>
	);
};

export interface PersonPageProps {
}

export default PersonPage;
