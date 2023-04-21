import { FunctionComponent } from 'react';
import './PersonInfo.scss';
const PersonInfo: FunctionComponent<PersonInfoProps> = (props) => {
	const { personInfo } = props;
	return (
		<div className="card_info">
			<ul>
			{personInfo?.map((info:any,index:number) => (
				<li key={index}>
					{info.title}: {info.data}
				</li>
			))}
			</ul>
		</div>
	);
};

export interface PersonInfoProps {
	personInfo: any;
}
export default PersonInfo;
