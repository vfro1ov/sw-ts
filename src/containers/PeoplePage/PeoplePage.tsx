import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { getPeopleImg,getPeopleId } from '../../services/getPeopleData';

const PeoplePage: FunctionComponent<PeoplePageProps> = () => {
	// const {} = props;
	const [people, setPeople] = useState<string[]>([]);
	const [peopleInfo, setPeopleInfo] = useState<any[]>([]);
	const getResponse = async (url: string) => {
		const res = await getApiResource(url);
		if (res) {
			const peopleList:any= res.results.map(({ name, url, gender }:any) => {
				const id = getPeopleId(url)
				const img = getPeopleImg(id)
			
				return {
					id,
					name,
					url,
					gender,
					img
				};
			});
			setPeople(peopleList);
		}
	};
	useEffect(() => {
		getResponse(API_PEOPLE);
	}, []);
	return (
		<div>
			<PeopleList people={people}/>
		</div>
	);
};

export interface PeoplePageProps {
}


export default PeoplePage;
