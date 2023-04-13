import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav: FunctionComponent<NavProps> = (props) => {
	const {} = props;

	return (
		<nav className="navbar">
			<div className="logo">
				<h1>StarWars Fun</h1>
			</div>
			<div className="navbar-links">
				<ul className='navbar-link'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/people/?page=1'}>People</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export interface NavProps {}
export default Nav;
