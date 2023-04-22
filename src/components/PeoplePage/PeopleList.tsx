import { FunctionComponent } from 'react';
// import Sw from './img/starwars.png';
import './PeopleList.scss';
import { Link } from 'react-router-dom';
const PeopleList: FunctionComponent<PeopleListProps> = (props): JSX.Element => {
	const { people } = props;
	return (
		<div className="cards">
			{people &&
				people.map(people => (
					<Link to={`/people/${people.id}`}>
						<div className="card_items" key={people.name}>
							<div className="card_item">
								<img src={people.img} alt="omg" />
								<div className="card_name">
									<div className="card_circle"></div>
									<h3>{people.name}</h3>
								</div>
							</div>
						</div>
					</Link>
				))}
		</div>
	);
};

export interface PeopleListProps {
	people: any;
}
export default PeopleList;
