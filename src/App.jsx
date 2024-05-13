import { useState } from 'react';
import deleteIcon from './assets/delete.png';
import starIcon from './assets/star.png';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [title, setTitle] = useState('');
	const [rating, setRating] = useState('0');
	const [sortType, setSortType] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!title.trim() || rating === '0') {
			alert('You must enter both a title and rating!');
			return;
		}
		const newMovie = { title, rating, id: Date.now() };
		setMovies([...movies, newMovie]);
		setTitle('');
		setRating('0');
	};

	const handleDelete = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
	};

	const handleSort = (type) => {
		setSortType(type);
		const sortedMovies = [...movies].sort((a, b) => {
			if (type === 'title') {
				return a.title.localeCompare(b.title);
			} else if (type === 'rating') {
				return b.rating - a.rating;
			}
			return 0;
		});
		setMovies(sortedMovies);
	};

	return (
		<div className="container">
			<h1>FilmList 2.0</h1>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Add a movie</legend>
					<label htmlFor="title-field">Title</label>
					<input
						type="text"
						id="title-field"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label htmlFor="rating-field">Rating</label>
					<select
						id="rating-field"
						className="form-control"
						value={rating}
						onChange={(e) => setRating(e.target.value)}>
						<option value="0">Select a rating...</option>
						{Array.from({ length: 5 }, (_, i) => (
							<option
								key={i}
								value={i + 1}>
								{i + 1}
							</option>
						))}
					</select>
					<input
						type="submit"
						className="btn btn-success mt-3"
						value="Submit"
					/>
				</fieldset>
			</form>
			<div className="sorting">
				<button
					onClick={() => handleSort('title')}
					className="btn btn-info">
					Sort by title
				</button>
				<button
					onClick={() => handleSort('rating')}
					className="btn btn-info">
					Sort by rating
				</button>
			</div>
			<hr />
			<h2>Movies</h2>
			<ul id="movies">
				{movies.map((movie) => (
					<li key={movie.id}>
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
								onClick={() => handleDelete(movie.id)}
								className="delete-button">
								<img
									src={deleteIcon}
									alt="Delete movie"
								/>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
