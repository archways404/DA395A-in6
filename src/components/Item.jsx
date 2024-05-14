import deleteIcon from '../assets/delete.png';
import starIcon from '../assets/star.png';

const Item = ({ movie, onDelete }) => {
	return (
		<li>
			<span className="movie-title">{movie.title}</span>
			<div>
				<span className="star-rating">
					{[...Array(parseInt(movie.rating))].map((_, i) => (
						<img
							key={i}
							src={starIcon}
							alt="Star"
						/>
					))}
				</span>
				<button
					onClick={() => onDelete(movie.id)}
					className="delete-button">
					<img
						src={deleteIcon}
						alt="Delete movie"
					/>
				</button>
			</div>
		</li>
	);
};

export default Item;
