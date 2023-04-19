import { FunctionComponent, useEffect, useState } from 'react';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useAppSelector } from '../../store/hooks.ts/storeHooks';

const FavoritesPage: FunctionComponent<FavoritesPageProps> = (props) => {
	const {} = props;

	const storeData = useAppSelector((state) => state.favorites.favorite);

	const [people, setPeople] = useState<any>();
	const arr = Object.entries(storeData);
	console.log(arr);
	useEffect(() => {
		const arr = Object.entries(storeData);
		if (arr.length) {
			const res = arr.map((item) => {
				return {
					id: item[0],
					name: item[1].name,
					img: item[1].img,
				};
			});
			console.log(res);
			setPeople(res);
		}
	}, [storeData]);
	return <div>{people?.length > 0 ? <PeopleList people={people} /> : <h2>Not Favorites</h2>}</div>;
};

export interface FavoritesPageProps {}
export default FavoritesPage;
