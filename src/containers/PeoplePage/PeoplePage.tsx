import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE, API_PERSON, API_SEARCH } from '../../constants/api';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { getPageId } from '../../services/getPageId';

import { useQueryParams } from '../../hooks/useQueryParams';
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

import './PeoplePage.scss';

const PeoplePage: FunctionComponent<PeoplePageProps> = () => {
	// const {} = props;
	const query = useQueryParams();
	const queryPage = query.get('page');
	const [search, setSearch] = useState('');
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);
	const [people, setPeople] = useState('');

	const getSearchResponse = async (param: string) => {
		const res = await getApiResource(API_SEARCH + param);
		if (res) {
			const peopleList: any = res.results.map(({ name, url }: any) => {
				const id = getPeopleId(url);
				const img = getPeopleImg(id);

				return {
					id,
					name,
					url,
					img,
				};
			});
			setPeople(peopleList);
		}
	};

	const getResponse = async (url: string) => {
		const res = await getApiResource(url);
		if (res) {
			const peopleList: any = res.results.map(({ name, url }: any) => {
				const id = getPeopleId(url);
				const img = getPeopleImg(id);

				return {
					id,
					name,
					url,
					img,
				};
			});
			setPeople(peopleList);
			setCounterPage(getPageId(url));
			setPrev(res.previous);
			setNext(res.next);
		}
	};
	useEffect(() => {
		getResponse(API_PEOPLE + queryPage);
	}, [queryPage]);
	return (
		<div>
			<div className='people_control'>
				{<SearchInput search={search} setSearch={setSearch} getSearchResponse={getSearchResponse} />}
				<Pagination counterPage={counterPage} prev={prev} next={next} getResponse={getResponse} />
			</div>
				{people.length ? <PeopleList people={people} /> : <h2>No results</h2> }
		</div>
	);
};

export interface PeoplePageProps {}

export default PeoplePage;
