import { FunctionComponent } from 'react';

const Films: FunctionComponent<FilmsProps> = (props) => {
	const { film } = props;

	return <div>
		{	film && 
		film.map((film:any) => (
		<li key={film.episode_id}>
			<img src={film.img} alt="film_logo" />
			{film.title}:{film.episode_id}</li>)
		)	}
		</div>;
};

export interface FilmsProps {
	film: any;
}
export default Films;
