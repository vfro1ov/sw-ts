import { FunctionComponent } from 'react';
import './PeoplePage.scss'
import { Link } from 'react-router-dom';
const PeopleList: FunctionComponent<PeopleListProps> = ( props ):JSX.Element => {
	const {people} = props;
	return (
		<div className='cards'>
			{people && people.map((people:any) => (
				<div className='card_item' key={people.id}>
					<Link to={`/people/${people.id}`}>
					<img src={people.img} alt="omg" />
					</Link>
					<h3>{people.name}</h3>
				</div>
			))}
		</div>
	);
};

export interface PeopleListProps {
	people:any
}
export default PeopleList;

