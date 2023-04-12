import { FunctionComponent } from 'react';

const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
	const { search, setSearchParam , getResponse} = props;

	const onChangePeople = (event) => {
		const value: string = event.target.value;
		setSearchParam(value);
		getResponse(value)
		console.log(value);
	};

	return (
		<div>
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
	getResponse: any
}
export default SearchInput;
