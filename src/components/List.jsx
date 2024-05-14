import Item from './Item';

const List = ({ movies, onDelete }) => {
	return (
		<ul id="movies">
			{movies.map((movie) => (
				<Item
					key={movie.id}
					movie={movie}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

export default List;
