import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import R2D2 from './img/r2d2.svg';
import './Nav.scss';
import InfoModal from '../InfoModal';

const Nav: FunctionComponent<NavProps> = (props) => {
	const {} = props;
	const [modalActive,setModalActive] = useState<boolean>(false)
	return (
		<nav className="navbar">
			<div className="logo">
				<h1>StarWars Fun</h1>
			</div>
			<div className="navbar_links">
				<ul className='navbar_link'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/people/?page=1'}>People</Link>
					</li>
				</ul>
			</div>
			<div className='navbar_modal'>
				<img src={R2D2} alt="info" onClick={() => setModalActive(true)}/>
				<InfoModal modalActive={modalActive} setModalActive={setModalActive} />
			</div>
		</nav>
	);
};

export interface NavProps {}
export default Nav;
