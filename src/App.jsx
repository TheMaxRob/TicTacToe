import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id='game-container'>
        PLAYERS
        <ol id='players'>
          <Player name="Max" symbol="X" />
          <Player name="Miguel" symbol="O" />
          
        </ol>

        GAME BOARD
      </div>
    </main>
  )
}

export default App
