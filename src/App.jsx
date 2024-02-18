import { useState } from 'react';
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from './components/Log';
import GameOver from './GameOver';
import { WINNING_COMBINATIONS } from '../winning-combinations';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      return currentPlayer;
}

export default function App() {
  const [ players, setPlayers ]= useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [ gameTurns, setGameTurns ] = useState([]);
  // const [ activePlayer, setActivePlayer ] = useState('X');

  let gameboard = [...initialGameBoard.map(array => [...array])];

  const activePlayer = deriveActivePlayer(gameTurns);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
}

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameboard[combination[1].row][combination[1].column]; 
    const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // Depends on previous state - use anonymous function
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex },
        player: currentPlayer
       }, ...prevTurns, 
      ];

       return updatedTurns;
    });
  }


  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((previousPlayers) => {
      return ({ ...previousPlayers,
          [symbol]: newName
      })
    })
  }

  return (
    <main>
      <div id='game-container'>
        PLAYERS
        <ol id='players' className='highlight-player'>
          <Player onChangeName={handlePlayerNameChange} initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player onChangeName={handlePlayerNameChange} initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          
        </ol>

      { (winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board={gameboard}
        winner={winner}
        isDraw={isDraw}
      />
        
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}
