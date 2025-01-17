
import Square from './Square'
import { calculateWinner } from '../utils/CalculateWinner';


const Board = ({ xIsNext, squares, onPlay }:
	{
		xIsNext: boolean,
		squares: string[],
		onPlay: (nextSquares: string[]) => void
	}) => {


	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";

		onPlay(nextSquares);

	}
	const winner = calculateWinner(squares);
	let status;

	console.log('i=  ', winner);
	if (winner && winner.winner != 'draw') {
		// status = "Winner: " + winner;
		status = "Победитель: " + winner.winner;
		// winLine=winner.line;
	}
	else {
		if (winner && winner.winner === 'draw') {
			// status = "It`s draw ";
			status = "Ничья";
		}
		else {
			// status = "Next player: " + (xIsNext ? "X" : "O")
			status = "Следующий игрок: " + (xIsNext ? "X" : "O")
		}
	}

	const row = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

	return (
		<>
			<h3 className="status">{status}</h3>
			<div className="board">
				<div className="board-row">
					<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
					<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
					<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
				</div>
				<div className="board-row">
					<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
					<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
					<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
				</div>
				<div className="board-row">
					<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
					<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
					<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
				</div>
			</div>
			<div className="board">
				{/* {row.map(
					item=><div className="board-row">
						{item.map(

						)}
				)} */}
			</div>
		</>
	)
}

export default Board;