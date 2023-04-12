import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination: FunctionComponent<PaginationProps> = (props) => {
	const { counterPage, prev, next, getResponse} = props;



	const handlePrev = () => {
		getResponse(prev);
	};
	const handleNext = () => {
		getResponse(next);
	};

	return (
		<div className='pagination'>
				<div className="pagination_page ">
						<Link to={`?page=${counterPage - 1}`} >
							<button onClick={handlePrev} disabled={!prev}>
								PREV
							</button>
						</Link>
				
				
						<Link to={`?page=${counterPage + 1}`}>
							<button  onClick={handleNext} disabled={!next}>
								{' '}
								NEXT
							</button>
						</Link>
				</div>
		</div>
	);
};

export interface PaginationProps {
	counterPage: number;
	prev: any;
	next: any;
	getResponse: any;
}
export default Pagination;
