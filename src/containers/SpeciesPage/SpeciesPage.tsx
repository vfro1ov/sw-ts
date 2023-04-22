import { FunctionComponent, useEffect, useState } from 'react';
import SpeciesList from '../../components/SpeciesPage';
import { getApiResource } from '../../utils/network';
import { getSpeciesId, getSpeciesImg } from '../../services/getSpeciesData';
import { API_SEARCH_SPEC, API_SPECIES } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import Pagination from '../../components/Pagination';
import { getPageId } from '../../services/getPageId';
import SearchInput from '../../components/SearchInput';

const SpeciesPage: FunctionComponent<SpeciesPageProps> = (props) => {
	const {} = props;
	const [species, setSpecies] = useState('');
	const [search,setSearch] = useState('')
	const query = useQueryParams();
	const queryPage = query.get('page');
	const [counterPage, setCounterPage] = useState(1);
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);

	const getSearchResponse = async (param: string) => {
		const res = await getApiResource(API_SEARCH_SPEC + param);
		if (res) {
			const speciesList: any = res.results.map(({ name, url }: any) => {
				const id = getSpeciesId(url);
				const img = getSpeciesImg(id);

				return {
					id,
					name,
					url,
					img,
				};
			});
			setSpecies(speciesList);
		}
	};

	const getSpeciesResponse = async (url) => {
		const res = await getApiResource(url);
		if (res) {
			const speciesList = res.results.map(({ name, url }) => {
				const id = getSpeciesId(url);
				const img = getSpeciesImg(id);
				return {
					id,
					name,
					img,
				};
			});
			setSpecies(speciesList)
			setPrev(res.previous);
			setNext(res.next);
			setCounterPage(getPageId(url))
		}
	};
	useEffect(() => {
		getSpeciesResponse(API_SPECIES + queryPage)
	}, [queryPage]);
	return (
		<div>
			<div className='people_control'>
			{<SearchInput search={search} setSearch={setSearch} getSearchResponse={getSearchResponse} />}
			<Pagination counterPage={counterPage} prev={prev} next={next} getResponse={getSpeciesResponse}/>
			</div>
			{species.length ? <SpeciesList species={species}/> : <h2>No results</h2> }
		</div>
	);
};

export interface SpeciesPageProps {}
export default SpeciesPage;
