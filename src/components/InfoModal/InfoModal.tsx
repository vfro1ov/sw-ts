import { FunctionComponent } from 'react';
import './InfoModal.css';

const InfoModal: FunctionComponent<InfoModalProps> = (props) => {
	const {modalActive,setModalActive} = props;

	

	return <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
		<div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation}>
		</div>
	</div>;
};
export interface InfoModalProps {
	setModalActive:any;
	modalActive:boolean;
}
export default InfoModal