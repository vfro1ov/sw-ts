import { FunctionComponent } from 'react';

import './PageNav.scss';
import { Link } from 'react-router-dom';

const PageNav: FunctionComponent<PageNavProps> = (props) => {
	const {} = props;
	const pages = [
		{ name: 'people', link: '/people/?page=1', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'species', link: '/species', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'films', link: '/films', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'favorites', link: '/favorites', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
	];
	const bgImage = `${pages[2]}`
	return (
		<>
			<div className="pages">
				{pages.map((page,index) => (
					<Link to={page.link}>
					<div className="pages_element" style={{ backgroundImage:bgImage}} key={index}>
						<p>{page.name}</p>
					</div>
					</Link>
				))}
			</div>
		</>
	);
};

export interface PageNavProps {}
export default PageNav;
