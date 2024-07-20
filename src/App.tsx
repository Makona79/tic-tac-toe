import { useState } from 'react'
import Board from './components/Board';
import './App.css'


function Game() {


	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handleplay(nextSquares: string[]) {

		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);

	}
	function jumpTo(nextMove: number) {
		setCurrentMove(nextMove);

	}
	const moves = history.map((_squares, move) => {
		let description;
		if (move > 0 && move === currentMove) {

			return (
				<p className='current-move' key={move}>Вы на ходу # {currentMove}</p>
			);
		}
		if (move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}
		return (
			<li key={move}>
				<button className='moves' onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);

	});
	return (
		<>
			<h2 className='title-tic'>Игра крестики-нолики</h2>
			<div className="game">
				<div className="game-board">
					<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handleplay} />
				</div>
				<div className="game-info">
					<ul className='history-list'>{moves}</ul>
				</div>
			</div>
			<div className="game2">
				<h2 className="title-tic">Игра крестики-нолики(усложнённая)</h2>
				
			</div>
		</>
	)
}
export default Game;

