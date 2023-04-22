import { FunctionComponent } from 'react';

const Films: FunctionComponent<FilmsProps> = (props) => {
	const { film } = props;

	return <div>
		{	film && 
		film.map((film,index) => (
		<li key={index}>
			<img src={film.img} alt="" />
			{film.name}</li>)
		)	}
		</div>;
};

export interface FilmsProps {
	film: any;
}
export default Films;
