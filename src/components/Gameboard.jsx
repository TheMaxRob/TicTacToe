export default function GameBoard({ onSelectSquare, board, winner, isDraw }) {
    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null || winner || isDraw}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}

            
        </ol>
        
    );
}