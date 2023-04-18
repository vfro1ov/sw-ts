import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useAppSelector } from '../../store/hooks.ts/storeHooks';

const FavoritesPage: FunctionComponent<FavoritesPageProps> = (props) => {
	const {} = props;

	const storeData = useAppSelector((state) => state.favorites);

	const [people, setPeople] = useState<any>();
	const arr  = Object.entries(storeData);
	console.log(arr);
	useEffect(()=> {
		const arr = Object.entries(storeData);
		if (arr.length) {
			const res = arr.map((item:any)=> {
				return {
					id: item
				}
			})
			console.log(res)
		setPeople(res)
		}
	},[])
	return <div>{people?.length === 0 ? <PeopleList people={people} /> : <h2>Not Favorites</h2>}</div>;
};

export interface FavoritesPageProps {}
export default FavoritesPage;
