import { FunctionComponent,  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import PersonFilm from '../../components/PersonPage/PersonFilm';
import PersonInfo from '../../components/PersonPage/PersonInfo';
import { getPeopleImg } from '../../services/getPeopleData';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import LinkBack from '../../components/LinkBack';

import './PersonPage.scss';


const PersonPage: FunctionComponent<PersonPageProps> = (props) => {


	// const {} = props;

const storeData = useSelector((state:any) => state.favorites)

	const [personFavorites, setPersonFavorites] = useState(false);
	const [personInfo, setPersonInfo] = useState<any>();
	const [personName, setPersonName] = useState<string>();
	const [personPhoto, setPersonPhoto] = useState<string>();
	const [personFilm, setPersonFilm] = useState<any>();
	const [personId, setPersonId] = useState<string>();


	const { id } = useParams() as { id: string };


	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			setPersonId(id);
			storeData[id] ? setPersonFavorites(true) : setPersonFavorites(false)

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
	}, [id,storeData]);

	return (
			<div className='person'>
				<LinkBack />
				<div className="person_photo">
					<h3>{personName}</h3>
					<PersonPhoto personPhoto={personPhoto} 
					personFavorites={personFavorites} 
					setPersonFavorites={setPersonFavorites} 
					personId={personId}
					personName={personName} />
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
