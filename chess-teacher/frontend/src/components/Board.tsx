//Chess board consists of 64 squares in a 8x8 grid
import React from "react";
import Row from "./Row";
import BoardHeader from "./BoardHeader";

interface Props {
  state: any[][];
  player: number;
  onSquareClick: (
    evt: React.MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => void;
}

const Board = ({ state, player, onSquareClick }: Props) => {
  let rowStructure: number[] = [];
  player === 0
    ? (rowStructure = [8, 7, 6, 5, 4, 3, 2, 1])
    : (rowStructure = [1, 2, 3, 4, 5, 6, 7, 8]);

  // console.log(state);
  // rowStructure = player === 1 ? rowStructure.reverse() : rowStructure;
  // console.log(rowStructure);

  return (
    <>
      <div className="container d-flex flex-column col-12 chessboard fs-5">
        <BoardHeader player={player} />
        {rowStructure.map((rowNumber, index) => {
          return (
            <Row
              rowNumber={rowNumber}
              player={player}
              key={index}
              state={state[player === 0 ? index : 7 - index]}
              onSquareClick={onSquareClick}
            />
          );
        })}
        <BoardHeader player={player} />
      </div>
    </>
  );
};

export default Board;
