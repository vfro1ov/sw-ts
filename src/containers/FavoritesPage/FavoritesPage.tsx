import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList';

const FavoritesPage: FunctionComponent<FavoritesPageProps> = (props) => {
	const {} = props;
	// const [people, setPeople] = useState<any>();

	const storeData = useSelector((state: any) => state.favorites);
	const people:string[] = Object.values(storeData.favorites)
	// const arr = Object.entries(storeData.favorites);
	// if (arr.length) {
	// 	const res: any = arr.map((item) => {
	// 		return {
	// 			id:item[1]
	// 		};
	// 	}, [people]);
	// 	setPeople(res);
	// }
	// useEffect(() => {
		
	// });
	return <div>{people.length ? <PeopleList people={people} /> : <h2>Not favorites</h2>}</div>;
};

export interface FavoritesPageProps {}
export default FavoritesPage;
