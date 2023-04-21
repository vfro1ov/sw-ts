import PersonPage from "../containers/PersonPage";
import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import FavoritesPage from "../containers/FavoritesPage";

export const routerConfig:RouterConfigProps[]= [
	{
		path: '/favorites',
		element: FavoritesPage,
	},
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