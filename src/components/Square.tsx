
const Square = ({ value, onSquareClick }:
	{
		value: string,
		onSquareClick: () => void
	}) => (

	<button className='squre' onClick={onSquareClick}>{value}</button>
);

export default Square;