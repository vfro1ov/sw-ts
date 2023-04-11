import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Nav: FunctionComponent<NavProps> = (props) => {
	const {} = props;

	return <nav className='navbar'>
		<div className='logo'>
			<h1>StarWars Fun</h1>
		</div>
		<div className='navbar-links'>
			<ul>
				<li className='navbar-link'>
					<Link to={'/'}>Home</Link>
				</li>
				<li className='navbar-link'>
					<Link to={'/people/?page=1'}>People</Link>
				</li>
			</ul>
		</div>
	</nav>;
};

export interface NavProps {}
export default Nav;
