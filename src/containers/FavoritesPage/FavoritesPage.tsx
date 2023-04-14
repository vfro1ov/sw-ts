import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList';

const FavoritesPage: FunctionComponent<FavoritesPageProps> = (props) => {
	const {} = props;
	const [people, setPeople] = useState([]);

	const storeData = useSelector((state: any) => state.favoriteReducer);

	useEffect(() => {
		const arr = Object.entries(storeData);
		if (arr.length) {
			const res: any = arr.map((item: any) => {
				return {
					id: item[0],
					name: item[1],
					img: item[1],
				};
			}, []);
			setPeople(res);
		}
	});

	return <div>{people.length ? <PeopleList people={people} /> : <h2>Not favorites</h2>}</div>;
};

export interface FavoritesPageProps {}
export default FavoritesPage;
