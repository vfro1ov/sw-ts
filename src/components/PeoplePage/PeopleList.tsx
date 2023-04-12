import { FunctionComponent } from 'react';
// import Sw from './img/starwars.png';
import './PeopleList.scss'
import { Link } from 'react-router-dom';
const PeopleList: FunctionComponent<PeopleListProps> = ( props ):JSX.Element => {
	const {people} = props;
	return (
		<div className='cards'>
			{people && people.map((people:any) => (
				<div className='card_items' key={people.id}>
					<div className='card_item'>
					<Link to={`/people/${people.id}`}>
					<img src={people.img} alt="omg" />
					</Link>
					<div className='card_name'> <img src='' alt="sw" /> 
					<h3>{people.name}</h3>
					</div>
					</div>
				</div>
			))}
		</div>
	);
};

export interface PeopleListProps {
	people:any
}
export default PeopleList;

