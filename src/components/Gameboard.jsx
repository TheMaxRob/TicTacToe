import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

    const [ gameboard, setGameBoard ]= useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        // Updating based on last state
        setGameBoard((prevGameBoard) => {
            // Creating copy so as not to directly update through reference immediately

            const updatedBoard = [ ...prevGameBoard.map(innerArray => [...innerArray]) ];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id='game-board'>
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>)}
                </ol>
            </li>)}

            
        </ol>
        
    );
}