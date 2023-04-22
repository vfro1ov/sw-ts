import { FunctionComponent } from 'react';
import PageNav from '../../components/HomePage/PageNav';

const HomePage: FunctionComponent<HomePageProps> = (props) => {
	// const {} = props;
	return <div>
		<PageNav />
	</div>;
};

export interface HomePageProps {}
export default HomePage;
