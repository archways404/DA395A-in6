import { useState } from 'react';

const Form = ({ onAddMovie }) => {
	const [title, setTitle] = useState('');
	const [rating, setRating] = useState('0');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!title.trim() || rating === '0') {
			alert('You must enter both a title and rating!');
			return;
		}
		const newMovie = { title, rating, id: Date.now() };
		onAddMovie(newMovie);
		setTitle('');
		setRating('0');
	};

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Add a movie</legend>
				<label htmlFor="title-field">Title:</label>
				<input
					type="text"
					id="title-field"
					className="form-control"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="rating-field">Rating:</label>
				<select
					id="rating-field"
					className="form-control"
					value={rating}
					onChange={(e) => setRating(e.target.value)}>
					<option value="0">Select the rating...</option>
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
					value="Save movie"
				/>
			</fieldset>
		</form>
	);
};

export default Form;
