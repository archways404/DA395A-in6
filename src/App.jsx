import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Buttons from './components/Buttons';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [sortType, setSortType] = useState('');

	const handleAddMovie = (newMovie) => {
		setMovies([...movies, newMovie]);
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
			<Form onAddMovie={handleAddMovie} />
			<Buttons onSort={handleSort} />
			<hr />
			<h2>Movies</h2>
			<List
				movies={movies}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export default App;
