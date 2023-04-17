import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorites, setFavorites } from '../../../store/features/favorites';
import rebel from './img/rebel.svg';
import rebelFill from './img/rebel_fill.svg';
import store from '../../../store/store';


const PersonPhoto: FunctionComponent<PersonPhotoProps> = (props) => {
	const { personPhoto, personFavorites, setPersonFavorites, personId, personName } = props;
	// const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorites) {
			store.dispatch(removeFavorites(personId))}
			else {
				store.dispatch(setFavorites({ id: personId, name: personName, photo: personPhoto }));
			}
			setPersonFavorites(!personFavorites);
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
	personPhoto: any;
	setPersonFavorites: any;
	personFavorites: any;
	personId: any;
	personName: any;
}
export default PersonPhoto;
