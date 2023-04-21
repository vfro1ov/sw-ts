import { FunctionComponent } from 'react';
// import { useDispatch } from 'react-redux';
import { removeFavorites, setFavorites } from '../../../store/features/favorites';
import rebel from './img/rebel.svg';
import rebelFill from './img/rebel_fill.svg';
import { useAppDispatch } from '../../../store/hooks.ts/storeHooks';

const PersonPhoto: FunctionComponent<PersonPhotoProps> = (props) => {
	const { personPhoto, personFavorites, setPersonFavorites, personId, personName } = props;
	const dispatch = useAppDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorites) {
			dispatch(removeFavorites(personId));
			setPersonFavorites(false);
		} else {
			dispatch(
				setFavorites({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				}),
			);
			setPersonFavorites(true);
		}
	}

	return (
		<>
			<div className="card_photo">
				<img src={personPhoto} alt="img" />
				<img className='card_favorite'
					src={personFavorites ? rebelFill : rebel}
					alt="rebel"
					onClick={dispatchFavoritePeople}
				/>
			</div>
		</>
	);
};

export interface PersonPhotoProps {
	personPhoto: string;
	setPersonFavorites: any;
	personFavorites: boolean;
	personId: string;
	personName: string;
}
export default PersonPhoto;
