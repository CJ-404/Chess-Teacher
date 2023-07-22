//practice Game
import React, { useState } from "react";
import Board from "../components/Board";
import RecordBoard from "../components/RecordBoard";

import "../app.css";

const Practice = () => {
  const InitialState: any[][] = [
    [
      { piece: "BR", color: 1, isKing: 0 },
      { piece: "BN", color: 1, isKing: 0 },
      { piece: "BB", color: 1, isKing: 0 },
      { piece: "BQ", color: 1, isKing: 0 },
      { piece: "BK", color: 1, isKing: 1 },
      { piece: "BB", color: 1, isKing: 0 },
      { piece: "BN", color: 1, isKing: 0 },
      { piece: "BR", color: 1, isKing: 0 },
    ],
    [
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
      { piece: "BP", color: 1, isKing: 0 },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
      { piece: "" },
    ],
    [
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
      { piece: "WP", color: 0, isKing: 0 },
    ],
    [
      { piece: "WR", color: 0, isKing: 0 },
      { piece: "WN", color: 0, isKing: 0 },
      { piece: "WB", color: 0, isKing: 0 },
      { piece: "WQ", color: 0, isKing: 0 },
      { piece: "WK", color: 0, isKing: 1 },
      { piece: "WB", color: 0, isKing: 0 },
      { piece: "WN", color: 0, isKing: 0 },
      { piece: "WR", color: 0, isKing: 0 },
    ],
  ];

  const [boardState, setBoardState] = useState<any[][]>(InitialState);
  const [player, setPlayer] = useState<number>(0); // 0 -> white, 1 -> black
  const [firstSelectedSquare, setFirstSelectedSquare] = useState<any[]>([]);
  const [toPlay, setToPlay] = useState<number>(0); // 0 -> white, 1 -> black
  const [isKingCheck, setIsKingCheck] = useState<any>({}); //0->white,1->black,-1->not in check
  const [lastMove, setLastMove] = useState<any>("");
  // const [whiteKingCheck, setWhiteKingCheck] = useState<boolean>(false);
  // const [blackKingCheck, setBlackKingCheck] = useState<boolean>(false);
  // const [select2, setSelect2] = useState<number[]>([]);

  const getSquareState = (row: number, col: number): any => {
    return boardState[row][col];
  };

  const togglePlayerView = (): void => {
    if (player === 0) {
      setPlayer(1);
    } else {
      setPlayer(0);
    }
    // let newboardState: any[][] = [];
    // for (let i = 0; i < 8; i++) {
    //     newboardState.push([]);
    //     for (let j = 0; j < 8; j++) {
    //         newboardState[i].push(boardState[7 - i][7 - j]);
    //     }
    // }
    // setBoardState(newboardState);
  };

  const onSquareClick = (
    evt: React.MouseEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    // console.log(evt.target);
    let target = evt.target as Element;

    // console.log(row, col);
    let currentSelectedSquareState: any = getSquareState(row, col);
    // console.log(currentSelectedSquareState);
    (currentSelectedSquareState.color === toPlay ||
      firstSelectedSquare.length === 4) &&
      target.classList.toggle("opacity-75");
    if (
      firstSelectedSquare.length === 0 &&
      currentSelectedSquareState.color === toPlay &&
      currentSelectedSquareState.piece !== ""
    ) {
      setFirstSelectedSquare([row, col, target, currentSelectedSquareState]);
    }
    if (firstSelectedSquare.length === 4) {
      console.log(
        `Selected ${
          firstSelectedSquare[3].piece
            ? firstSelectedSquare[3].piece
            : "an empty square"
        } on ( ${firstSelectedSquare[0]} , ${firstSelectedSquare[1]} ) at first`
      );
      console.log(
        `Selected ${
          currentSelectedSquareState.piece
            ? currentSelectedSquareState.piece
            : "an empty square"
        } on ( ${row} , ${col} ) at second`
      );

      firstSelectedSquare[2].classList.toggle("opacity-75");
      target.classList.toggle("opacity-75");
      setFirstSelectedSquare([]);
    }
  };

  // console.log(boardState);

  return (
    <>
      <h2 className="text-center text-light">Practice Game</h2>
      <div className="container row">
        <div className="col-lg-7 row">
          <Board
            player={player}
            state={boardState}
            onSquareClick={onSquareClick}
          />
        </div>
        <div className="col-lg-3">
          <RecordBoard onToggle={togglePlayerView} />
        </div>
        <div className="col-lg21 text-light">{`${
          toPlay === 0 ? "White" : "Black"
        } to Play`}</div>
      </div>
    </>
  );
};

export default Practice;
