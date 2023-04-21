import { FunctionComponent } from 'react';
import './SearchInput.scss'

const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
	const { search, setSearchParam , getSearchResponse} = props;

	const onChangePeople = (event) => {
		const value: string = event.target.value;
		setSearchParam(value);
		getSearchResponse(value)
		console.log(value);
	};

	return (
		<div className='search_input'>
			<input
				type="text"
				placeholder="Write the name of the character..."
				value={search}
				onChange={onChangePeople}
			/>
		</div>
	);
};

export interface SearchInputProps {
	search: string;
	setSearchParam: any;
	getSearchResponse: any
}
export default SearchInput;
