//this has 8 squres in it.

import React from "react";
import Square from "./Square";
import BoardRow from "./BoardRow";

interface Props {
    rowNumber: number;
    player: number;
    state: any[];
    onSquareClick: (
        evt: React.MouseEvent<HTMLDivElement>,
        row: number,
        col: number
    ) => void;
}

//color
// 0 = bg-light
// 1 = bg-success

const Row = ({ rowNumber, player, state, onSquareClick }: Props) => {
    const generateColors = (): number[] => {
        let colors: number[] = [];
        if (player === 0 && rowNumber % 2 === 1) {
            colors = [0, 1, 0, 1, 0, 1, 0, 1];
        }
        if (player === 0 && rowNumber % 2 === 0) {
            colors = [1, 0, 1, 0, 1, 0, 1, 0];
        }
        if (player === 1 && rowNumber % 2 === 1) {
            colors = [1, 0, 1, 0, 1, 0, 1, 0];
        }
        if (player === 1 && rowNumber % 2 === 0) {
            colors = [0, 1, 0, 1, 0, 1, 0, 1];
        }
        return colors;
    };
    const getColor = (index: number): string => {
        if (index == 0) return "bg-light";
        if (index == 1) return "bg-success";
        return "bg-danger";
    };

    const findRowIndex = (): number => {
        // return player === 1 ? rowNumber - 1 : (8 - rowNumber) % 8;
        return (8 - rowNumber) % 8;
    };

    const rowIndex = findRowIndex();

    let colors = generateColors();
    // colors = toggle === 1 ? colors.reverse() : colors;
    // console.log(state);
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <BoardRow digit={rowNumber} />
                {colors.map((color, index) => {
                    return (
                        <Square
                            onSquareClick={onSquareClick}
                            color={getColor(color)}
                            state={state[player === 0 ? index : 7 - index]}
                            row={rowIndex}
                            col={player === 0 ? index : 7 - index}
                            key={index}
                        />
                    );
                })}
                <BoardRow digit={rowNumber} />
            </div>
        </>
    );
};

export default Row;
