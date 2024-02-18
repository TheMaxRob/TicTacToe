import { useState } from 'react';
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from './components/Log';
import {WINNING_COMBINATIONS} from '../winning-combinations';


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

  const [ gameTurns, setGameTurns ] = useState([]);
  // const [ activePlayer, setActivePlayer ] = useState('X');

  let gameboard = initialGameBoard;



  const activePlayer = deriveActivePlayer(gameTurns);


  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
}

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare
    const secondSquare
    const thirdSquare
  }

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

  return (
    <main>
      <div id='game-container'>
        PLAYERS
        <ol id='players' className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          
        </ol>

      <GameBoard 
        onSelectSquare={handleSelectSquare} 
        turns={gameTurns}
      />
        
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}
