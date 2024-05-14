const Buttons = ({ onSort }) => {
	return (
		<div className="sorting">
			<button
				onClick={() => onSort('title')}
				className="btn btn-info">
				Sort by title
			</button>
			<button
				onClick={() => onSort('rating')}
				className="btn btn-info">
				Sort by rating
			</button>
		</div>
	);
};

export default Buttons;
