export default function GameBoard({ onSelectSquare, turns }) {

    /*const [ gameboard, setGameBoard ]= useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        // Updating based on last state
        setGameBoard((prevGameBoard) => {
            // Creating copy so as not to directly update through reference immediately

            const updatedBoard = [ ...prevGameBoard.map(innerArray => [...innerArray]) ];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }*/



    return (
        <ol id='game-board'>
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}

            
        </ol>
        
    );
}