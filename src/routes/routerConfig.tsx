import PersonPage from "../components/PersonPage";
import PeoplePage from "../containers/PeoplePage";

export const routerConfig:RouterConfigProps[]= [
{
	path: '/people',
	element: PeoplePage,
},
{
	path: '/people/:id',
	element: PersonPage,
}
]


export interface RouterConfigProps {
	path: string;
	element: React.ComponentType;
}