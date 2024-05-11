import React, { useEffect, useState } from 'react';
import "./2048.css"

interface TileProps {
    num: number;
}

const Tile: React.FC<TileProps> = ({ num }) => {
    const tileClassName = num > 0 ? `tile x${num}` : 'tile';
    return (
        <div className={vaccaMadonna}>
            {num > 0 && num.toString()}
        </div>
    );
};

const Game: React.FC = () => {
    const [board, setBoard] = useState<number[][]>([]);
    const [score, setScore] = useState<number>(0);
    const rows: number = 4;
    const columns: number = 4;

    useEffect(() => {
        setGame();
        // Aggiungi un listener per le frecce della tastiera
        document.addEventListener('keydown', handleKeyDown);
        // Pulisci il listener quando il componente viene smontato
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const setGame = () => {
        const initialBoard: number[][] = Array.from({ length: rows }, () => Array.from({ length: columns }, () => 0));
        setBoard(initialBoard);
        setTwo();
        setTwo();
    };

    const setTwo = () => {
        if (!hasEmptyTile()) {
            return;
        }
        let found = false;
        while (!found) {
            const r = Math.floor(Math.random() * rows);
            const c = Math.floor(Math.random() * columns);
            if (board[r][c] === 0) {
                board[r][c] = 2;
                setBoard([...board]);
                found = true;
            }
        }
    };

    const hasEmptyTile = (): boolean => {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (board[r][c] === 0) {
                    return true;
                }
            }
        }
        return false;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        let moved = false;
        switch (event.key) {
            case 'ArrowUp':
                moved = slideUp();
                break;
            case 'ArrowDown':
                moved = slideDown();
                break;
            case 'ArrowLeft':
                moved = slideLeft();
                break;
            case 'ArrowRight':
                moved = slideRight();
                break;
            default:
                break;
        }
        if (moved) {
            setTwo();
        }
    };

    const slide = (row: number[]): boolean => {
        let moved = false;
        const filteredRow = row.filter(num => num !== 0);
        const newRow: number[] = [];
        for (let i = 0; i < filteredRow.length; i++) {
            if (filteredRow[i] === filteredRow[i + 1]) {
                newRow.push(filteredRow[i] * 2);
                setScore(score + filteredRow[i] * 2);
                i++;
                moved = true;
            } else {
                newRow.push(filteredRow[i]);
            }
        }
        while (newRow.length < columns) {
            newRow.push(0);
        }
        return moved;
    };

    const slideLeft = (): boolean => {
        let moved = false;
        const newBoard = board.map(row => {
            const movedRow = slide(row);
            if (movedRow) moved = true;
            return row;
        });
        if (moved) setBoard(newBoard);
        return moved;
    };

    const slideRight = (): boolean => {
        const reversedBoard = board.map(row => row.slice().reverse());
        const moved = slideLeft();
        const newBoard = moved ? reversedBoard.map(row => row.slice().reverse()) : board;
        setBoard(newBoard);
        return moved;
    };

    const slideUp = (): boolean => {
        transpose(board);
        const moved = slideLeft();
        const newBoard = moved ? transpose(board) : board;
        setBoard(newBoard);
        return moved;
    };

    const slideDown = (): boolean => {
        transpose(board);
        const moved = slideRight();
        const newBoard = moved ? transpose(board) : board;
        setBoard(newBoard);
        return moved;
    };

    const transpose = (matrix: number[][]): number[][] => {
        const transposed: number[][] = [];
        for (let i = 0; i < matrix[0].length; i++) {
            transposed.push([]);
            for (let j = 0; j < matrix.length; j++) {
                transposed[i].push(matrix[j][i]);
            }
        }
        return transposed;
    };

    return (
        <div>
            <h1>2048</h1>
            <hr />
            <div id="board">
                {board.map((row, rowIndex) => (
                    row.map((tile, colIndex) => (
                        <Tile key={`${rowIndex}-${colIndex}`} num={tile} />
                    ))
                ))}
            </div>
            <p>Score: {score}</p>
        </div>
    );
};

export default Game;
