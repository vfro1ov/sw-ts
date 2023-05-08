import { FunctionComponent } from 'react';

import './PageNav.scss';
import { Link } from 'react-router-dom';

const PageNav: FunctionComponent<PageNavProps> = (props) => {
	const {} = props;
	const pages = [
		{ name: 'people', link: '/people/?page=1', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'species', link: '/species/?page=1', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'films', link: '/films', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
		{ name: 'favorites', link: '/favorites', bgimg: 'https://eksmo.ru/upload/iblock/8af/Exmo_0005_full_min.jpg' },
	];
	const bgimage = ['https://p4.wallpaperbetter.com/wallpaper/134/374/484/star-wars-ewan-mcgregor-samuel-l-jackson-anakin-skywalker-hayden-christensen-obiwan-kenobi-mace-wind-video-games-star-wars-hd-art-wallpaper-preview.jpg',
	'https://img1.akspic.ru/crops/5/0/5/1/41505/41505-zvezdnye_vojny-enakin_skajuoker-droid-bronya-rycar-720x1280.jpg',
	'https://img1.akspic.ru/crops/0/4/6/1/7/171640/171640-poster_sagi_o_skajuokerah_zvezdnyh_vojn-dzhordzh_lukas-lego_zvezdnye_vojny_saga_o_skajuokerah-zvezdnye_vojny_vosstanie_skajuoker-mark_hemill-720x1280.jpg',
	'https://img1.akspic.ru/crops/3/0/8/3/6/163803/163803-art-asoka_tano-dart_vejder-zvezdnye_vojny_vojny_klonov-poster-720x1280.jpg'
]
	const bgImage = {
		backgroundImage: `url('${bgimage[1]}')`
	}
	console.log(bgImage)
	return (
		<>
			<div className="pages">
				{pages.map((page,index) => (
					<Link to={page.link}>
					<div className="pages_element"  key={index} style={{backgroundImage: `url('${bgimage[index]}')`}}>
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
