import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { removePersonToFavorites } from '../../../store/actions';
import rebel from './img/rebel.svg';
import rebelFill from './img/rebel_fill.svg';

const PersonPhoto: FunctionComponent<PersonPhotoProps> = (props) => {
	const { personPhoto, personFavorites, setPersonFavorites, personId, personName } = props;
	const dispatch = useDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorites) {
			dispatch(removePersonToFavorites(personId));
			setPersonFavorites(true);
		}
		dispatch(
			setPersonFavorites({
				[personId]: {
					name: personName,
					img: personPhoto,
				},
			}),
		);
	};

	return (
		<>
			{' '}
			<div className="card_photo">
				<img
					src={personFavorites ? rebelFill : rebel}
					alt="rebel"
					onClick={() => dispatchFavoritePeople()}
				/>
				<img src={personPhoto} alt="img" />
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
