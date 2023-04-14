import { FunctionComponent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LinkBack.scss';

const LinkBack: FunctionComponent<LinkBackProps> = (props) => {
	const history = useNavigate();
	const handleBack = (event) => {
		event.preventDefault();
		history(-1);
	};
	const {} = props;

	return (
		<div className="linkback">
			<Link to="/" onClick={handleBack}>
				<button className='btn third'>back</button>
			</Link>
		</div>
	);
};

export interface LinkBackProps {}
export default LinkBack;
