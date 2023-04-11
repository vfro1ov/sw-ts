import { FunctionComponent } from 'react';
import './PersonInfo.scss';
const PersonInfo: FunctionComponent<PersonInfoProps> = (props) => {
	const { personInfo } = props;
	return (
		<div className="card_info">
			{personInfo?.map((info:any) => (
				<li>
					{info.title}:{info.data}
				</li>
			))}
		</div>
	);
};

export interface PersonInfoProps {
	personInfo: any;
}
export default PersonInfo;
