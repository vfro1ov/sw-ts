import { FunctionComponent } from 'react';
import './PeoplePage.scss'
import { Link } from 'react-router-dom';
const PeopleList: FunctionComponent<PeopleListProps> = ({ people }):JSX.Element => {
	// const {} = props;

	return (
		<div className='cards'>
			{people && people.map(({id,img}) => (
				<div className='card_item'>
					<Link to={`/people/${id}`}>
					<img src={img} alt="omg" />
					</Link>
					<li key={people.id}>{people.name}</li>
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

