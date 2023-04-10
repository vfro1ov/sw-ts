import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { useParams } from 'react-router-dom';
import { API_PERSON } from '../../constants/api';

const PersonPage: FunctionComponent<PersonPageProps> = (props) => {
	const {} = props;
	const [person, setPerson] = useState<any[]>([]);
	const [personId, setPersonId] = useState<string|undefined>();
	const { id } = useParams();

	useEffect(() => {
		(async  () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			setPersonId(id);
			console.log(personId)
			setPerson([
				{ title: 'Name', data: res.name },
				{ title: 'Gender', data: res.gender },
				{ title: 'Hair_color', data: res.hair_color },
				{ title: 'Skin color', data: res.skin_color },
				{ title: 'Eye color', data: res.eye_color },
				{ title: 'Mass', data: res.mass },
			]);
		})();
	}, [id]);

	return <div>

	{ person?.map(({title,data})=> (
		<li>{title}:{data}</li>
	))}
	</div>;
};

export interface PersonPageProps {}

export default PersonPage;
