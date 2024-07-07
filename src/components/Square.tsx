
function Square({ value, onSquareClick }: { value: string, onSquareClick: () => void }) {
	return (
		<button className='squre' onClick={onSquareClick}>{value}</button>
	)
}
export default Square