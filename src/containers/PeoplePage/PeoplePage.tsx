import { FunctionComponent, useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";

const PeoplePage: FunctionComponent<PeoplePageProps> = (props) => {
	const {} = props;
	const [people,setPeople] = useState();
	const getResponse = async (url) =>{
		const res = getApiResource(url);
		if (res) {
			const peopleList = res.result.map((name, url, gender ) => {
				return {
					name,
					url,
					gender
				}
			})
		console.log(res.result)
		}
	}
	useEffect(()=> {
		setPeople(peopleList)
	},[])
	return (
		<div>
			{}
		</div>
	);
}

export interface PeoplePageProps {
}
export default PeoplePage