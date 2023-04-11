import PersonPage from "../containers/PersonPage";
import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";

export const routerConfig:RouterConfigProps[]= [

{
	path: '/people',
	element: PeoplePage,
},
{
	path: '/people/:id',
	element: PersonPage,
},
{
	path: '/',
	element: HomePage,
}
]


export interface RouterConfigProps {
	path: string;
	element: React.ComponentType;
}