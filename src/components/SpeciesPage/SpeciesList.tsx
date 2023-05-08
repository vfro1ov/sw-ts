import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const SpeciesList: FunctionComponent<SpeciesListProps> = (props) => {
	const {species} = props;

	return <div>
		<div className="cards">
			{species &&
				species.map(species => (
					<Link to={`/species/${species.id}`} key={species.id}>
						<div className="card_items" >
							<div className="card_item">
								<img src={species.img} alt="omg" />
								<div className="card_name">
									<div className="card_circle"></div>
									<h3>{species.name}</h3>
								</div>
							</div>
						</div>
					</Link>
				))}
		</div>
	</div>;
};

export interface SpeciesListProps {
	species:any;
}
export default SpeciesList;
