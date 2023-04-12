import { FunctionComponent, useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE, API_SEARCH } from '../../constants/api';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { getPageId } from '../../services/getPageId';

import { useQueryParams } from '../../hooks/useQueryParams';
import Pagination from '../../components/Pagination';
import SearchInput from '../../components/SearchInput';

const PeoplePage: FunctionComponent<PeoplePageProps> = () => {
	// const {} = props;
	const query = useQueryParams();
	const queryPage = query.get('page');
	const [search, setSearch] = useState<any>();
	const [searchParam, setSearchParam] = useState('');
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);
	const [people, setPeople] = useState<string[]>([]);

	

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
			<div>
				{<SearchInput search={search} setSearchParam={setSearchParam} getResponse={getResponse} />}
				<Pagination counterPage={counterPage} prev={prev} next={next} getResponse={getResponse} />
			</div>
				<PeopleList people={people} />;
		</div>
	);
};

export interface PeoplePageProps {}

export default PeoplePage;
