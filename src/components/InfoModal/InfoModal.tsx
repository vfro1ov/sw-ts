import { FunctionComponent } from 'react';
import './InfoModal.scss';

const InfoModal: FunctionComponent<InfoModalProps> = (props) => {
	const {modalActive,setModalActive} = props;

	

	return <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
		<div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation}>
			<h3>
				Персонажи данного фильма:
			</h3>
		<p>Тут будет какой то информационный текст...</p>
		</div>
	</div>;
};
export interface InfoModalProps {
	setModalActive:any;
	modalActive:boolean;
}
export default InfoModal