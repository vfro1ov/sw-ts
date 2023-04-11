import { FunctionComponent } from 'react';

const PersonPhoto: FunctionComponent<PersonPhotoProps> = (props) => {
	const { personPhoto } = props;

	return (
		<>		<div className="card_photo">
			<img src={personPhoto} alt='img' />
		</div>
		</>
	);
};

export interface PersonPhotoProps {
	personPhoto: any;
}
export default PersonPhoto;
