import { FunctionComponent } from 'react';
import './PeoplePage.scss'
import { Link } from 'react-router-dom';
const PeopleList: FunctionComponent<PeopleListProps> = ({ people }):JSX.Element => {
	// const {} = props;
	return (
		<div className='cards'>
			{people && people.map((people:any) => (
				<div className='card_item' key={people.id}>
					<Link to={`/people/${people.id}`}>
					<img src={people.img} alt="omg" />
					</Link>
					<li>{people.name}</li>
					<li>{people.gender}</li>
				</div>
			))}
		</div>
	);
};

export interface PeopleListProps {
	people:any
}
export default PeopleList;

