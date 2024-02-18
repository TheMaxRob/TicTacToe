import { useState } from 'react';
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";

export default function App() {

  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleSelectSquare() {
    // Depends on previous state - use anonymous function
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id='game-container'>
        PLAYERS
        <ol id='players' className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          
        </ol>

      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        
      </div>
    </main>
  )
}
